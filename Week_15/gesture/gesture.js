export class Dispatcher {
  constructor(element) {
    this.element = element;
  }

  dispatch(type, properties) {
    let event = new Event(type);
    for (let name in properties) {
      event[name] = properties[name];
    }
    this.element.dispatchEvent(event);
  }
}

// listen => recognize => dispatch

// new Listener(new Recognizer(dispatch))

export class Listener {
  constructor(element, recognizer) {
    let isListeningMouse = false;
    let contexts = new Map();

    element.addEventListener("mousedown", (event) => {
      let context = Object.create(null);
      contexts.set("mouse" + (1 << event.button), context);

      recognizer.start(event, context);
      let mousemove = (event) => {
        let button = 1;
        while (button <= event.buttons) {
          if (button & event.buttons) {
            // order of buttons & button property is not same
            let key;
            if (button === 2) key = 4;
            else if (button === 4) key = 2;
            else key = button;
            let context = contexts.get("mouse" + key);
            recognizer.move(event, context);
          }
          button = button << 1;
        }
      };
      let mouseup = (event) => {
        let context = contexts.get("mouse" + (1 << event.button));
        recognizer.end(event, context);
        contexts.delete("mouse" + (1 << event.button));
        if (event.buttons === 0) {
          document.removeEventListener("mousemove", mousemove);
          document.removeEventListener("mouseup", mouseup);
          isListeningMouse = false;
        }
      };
      if (!isListeningMouse) {
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
        isListeningMouse = true;
      }
    });

    element.addEventListener("touchstart", (event) => {
      for (let touch of event.changedTouches) {
        let context = Object.create(null);
        contexts.set(touch.identifier, context);
        recognizer.start(touch, context);
      }
    });

    element.addEventListener("touchmove", (event) => {
      for (let touch of event.changedTouches) {
        recognizer.move(touch, contexts.get(touch.identifier));
      }
    });

    element.addEventListener("touchend", (event) => {
      for (let touch of event.changedTouches) {
        recognizer.end(touch, contexts.get(touch.identifier));
        contexts.delete(touch.identifier);
      }
    });

    // touch事件可被alert等东西取消
    element.addEventListener("touchcancel", (event) => {
      for (let touch of event.changedTouches) {
        recognizer.cancel(touch, contexts.get(touch.identifier));
        contexts.delete(touch.identifier);
      }
    });
  }
}

export class Recognizer {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }
  start(point, context) {
    //console.log("start", point.clientX, point.clientY);
    context.startX = point.clientX;
    context.startY = point.clientY;
    context.points = [
      {
        t: Date.now(),
        x: point.clientX,
        y: point.clientY,
      },
    ];

    context.isTap = true;
    context.isPan = false;
    context.isPress = false;

    context.handler = setTimeout(() => {
      context.isTap = false;
      context.isPan = false;
      context.isPress = true;
      context.handler = null;
      //console.log("press");
      this.dispatcher.dispatch("press", {});
    }, 500);
  }
  move(point, context) {
    let dx = point.clientX - context.startX;
    let dy = point.clientY - context.startY;
    if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
      context.isTap = false;
      context.isPan = true;
      context.isPress = false;
      context.isVertical = Math.abs(dx) < Math.abs(dy);
      //console.log("panStart");
      this.dispatcher.dispatch("panStart", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
      });
      clearTimeout(context.handler);
    }

    if (context.isPan) {
      //console.log(dx, dy);
      //console.log("pan");
      this.dispatcher.dispatch("pan", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
      });
    }

    context.points = context.points.filter(
      (point) => Date.now() - point.t < 500
    );

    context.points.push({
      t: Date.now(),
      x: point.clientX,
      y: point.clientY,
    });
    //console.log("move", point.clientX, point.clientY);
  }

  end(point, context) {
    if (context.isTap) {
      //console.log("tap");
      this.dispatcher.dispatch("tap", {});
      clearTimeout(context.handler);
    }

    if (context.isPress) {
      //console.log("pressend");
      this.dispatcher.dispatch("pressend", {});
    }

    context.points = context.points.filter(
      (point) => Date.now() - point.t < 500
    );

    let v;
    if (!context.points.length) {
      v = 0;
    } else {
      let d =
        (point.clientX - context.points[0].x) ** 2 +
        (point.clientY - context.points[0].y) ** 2;
      d = Math.sqrt(d);
      v = d / (Date.now() - context.points[0].t);
    }

    if (v > 1.5) {
      //console.log("flick");
      this.dispatcher.dispatch("flick", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick,
        velocity: v,
      });
      context.isFlick = true;
    } else {
      context.isFlick = false;
    }

    if (context.isPan) {
      //console.log("panend");
      this.dispatcher.dispatch("panend", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick,
      });
    }

    //console.log(v);
    //console.log("end", point.clientX, point.clientY);
  }

  cancel(point, context) {
    clearTimeout(context.handler);
    //console.log("cancel", point.clientX, point.clientY);
    this.dispatcher.dispatch("cancel", {});
  }
}

export function enableGesture(element) {
  new Listener(element, new Recognizer(new Dispatcher(element)));
}
