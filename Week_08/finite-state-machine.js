{
  function matchA(string) {
    for (let c of string) {
      if (c == "a") return true;
    }
    return false;
  }

  console.log(matchA("I am groot"));
}

{
  function matchAB(string) {
    let foundA = false;
    for (let c of string) {
      if (c == "a")
        foundA = true;
      else if (foundA && c == "b")
        return true;
      else
        foundA = false;
    }
    return false;
  }
  console.log(matchAB("I acbm groot"));
}

{
  function matchABCDEF(string) {
    let matchArray = ['a','b','c','d','e','f'];
    let matchIndex = 0;
    for (let c of string) {
      if (c == matchArray[matchIndex])
        matchIndex++;
      else if (c == matchArray[0])
        matchIndex = 1;
      else
        matchIndex = 0;
      
      if (matchIndex == matchArray.length)
        return true;
    }
    return false;
  }
  console.log(matchABCDEF("I abdefcbm groot"));
}

{
  function matchByFiniteStateMachine(string) {
    let state = start;
    for (let c of string) {
      state = state(c);
    }
    return state === end;
  }

  function start(c) {
    if (c === "a")
      return foundA;
    else
      return start;
  }

  function end(c) {
    return end;
  }

  function foundA(c) {
    if (c === "b")
      return foundB;
    else
      return start(c);
  }

  function foundB(c) {
    if (c === "c")
      return foundC;
    else
      return start(c);
  }

  function foundC(c) {
    if (c === "d")
      return foundD;
    else
      return start(c);
  }

  function foundD(c) {
    if (c === "e")
      return foundE;
    else
      return start(c);
  }

  function foundE(c) {
    if (c === "f")
      return end;
    else
      return start(c);
  }

  console.log(matchByFiniteStateMachine("I abcdefcbm groot"));
}


{
  function matchByFiniteStateMachine(string) {
    let state = start;
    for (let c of string) {
      state = state(c);
    }
    return state === end;
  }

  function start(c) {
    if (c === "a")
      return foundA;
    else
      return start;
  }

  function end(c) {
    return end;
  }

  function foundA(c) {
    if (c === "b")
      return foundB;
    else
      return start(c);
  }

  function foundB(c) {
    if (c === "c")
      return foundC;
    else
      return start(c);
  }

  function foundC(c) {
    if (c === "a")
      return foundA2;
    else
      return start(c);
  }

  function foundA2(c) {
    if (c === "b")
      return foundB2;
    else
      return start(c);
  }

  function foundB2(c) {
    if (c === "x")
      return end;
    else
      return foundB(c);
  }

  console.log(matchByFiniteStateMachine("I abcdefcbm groot"));
}