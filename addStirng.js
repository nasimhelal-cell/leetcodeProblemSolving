let s1 = ["1", "1", "1", "1"];
let s2 = ["1", "0", "0"];
let c = [];
let ans = [];

while (s1.length !== s2.length) {
  if (s2.length < s1.length) s2.unshift("0");
  else if (s2.length > s1.length) s1.unshift("0");
}
while (s1.length !== c.length) {
  c.unshift("0");
}
c.unshift("0");
for (let i = s1.length - 1; i >= 0; i--) {
  let str = `${c[i]}${s1[i]}${s2[i]}`;
  if (str === "000") {
    ans.unshift("0");
    c[i - 1] = "0";
  } else if (str === "111") {
    ans.unshift("1");
    c[i - 1] = "1";
  } else if (str === "100" || str === "010" || str === "001") {
    ans.unshift("1");
    c[i - 1] = "0";
  } else if (str === "110" || str === "011" || str === "101") {
    ans.unshift("0");
    c[i - 1] = "1";
  }
}
if (c[-1] === "1") ans.unshift("1");
