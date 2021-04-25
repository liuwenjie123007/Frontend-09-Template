function UTF8_Encoding(string) {
  return new TextEncoder('uft8').encode(string);;
}

console.log(UTF8_Encoding("123"));
console.log(UTF8_Encoding("456"));