function numberToString(number) {
  return number.toString();
}


console.log(numberToString(123));
console.log(numberToString(0b11));
console.log(numberToString(0o11));
console.log(numberToString(0x11));

function stringToNumber(string) {
  return new Number(string) + 0;
}

console.log(stringToNumber('123'));
console.log(stringToNumber('0b11'));
console.log(stringToNumber('0o11'));
console.log(stringToNumber('0x11'));