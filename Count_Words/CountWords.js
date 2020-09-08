"use strict";

let bodyText = document.querySelector("body").innerText;
let bodyNum = bodyText.split(" ").length;
let myNum = bodyText.match(new RegExp("\\b(the|is|was)\\b", "gi")).length;
// \\b: they같은 것이 the로 인식되는 것을 방지하기 위해 뛰어쓰기를 넣어주는 것.
// g: the를 bodyText 전체에서 찾을 것이다.
// i: 대소문자 구분없이 찾는다.
console.log(myNum + "/" + bodyNum);
