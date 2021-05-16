function calculate() {
  let n = 256 ** 2;
  return (
    arguments[0] * 256 ** 3 +
    arguments[1] * 256 ** 2 +
    arguments[2] * 256 +
    arguments[3]
  );
}

let list = [
  { name: "div#a.b .c[id=x]", value: calculate(0, 1, 3, 1) },
  { name: "#a:not(#b)", value: calculate(0, 2, 0, 0) },
  { name: "*.a", value: calculate(0, 0, 1, 0) },
  { name: "div.a", value: calculate(0, 0, 1, 1) },
];

list = list.sort((a, b) => b.value - a.value);
list.forEach((el) => console.log(el.name));

