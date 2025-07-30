"use strict";
//枚举
Object.defineProperty(exports, "__esModule", { value: true });
// import { log } from "console"
//数字枚举
// enum color {
//   red,
//   blue,
//   green
// }
// console.log(color.red)
// console.log(color.blue)
// console.log(color.green)
//增长枚举
// enum color {
//   red = 1,
//   blue,
//   green
// }
// console.log(color.red)
// console.log(color.blue)
// console.log(color.green)
//自定义枚举
// enum color {
//   red = 1,
//   blue = 3,
//   green = 7
// }
// console.log(color.red)
// console.log(color.blue)
// console.log(color.green)
//2字符串枚举
// enum Types {
//   Red = 'red',
//   Blue = 'blue',
//   Green = 'green'
// }
// console.log(Types.Red)
// console.log(Types.Blue)
// console.log(Types.Green)
//异构枚举
// enum Color {
//   dd,
//   yes = 1,
//   no = 'no'
// }
// interface A {
//   red: Color.yes
// }
// let obj: A = {
//   red: Color.yes
// }
// console.log(Color.yes)
// console.log(Color.no);
//const枚举
// const  enum Types {
//   sucess,
//   fail
// }
// let code:number = 0
// if (code === Types.sucess){
// }
//反向映射 
var Types;
(function (Types) {
    Types["sucess"] = "ad";
})(Types || (Types = {}));
//let sucess ：string = Types.sucess 字符串用不了
var sucess = Types.sucess;
var key = Types[sucess];
console.log("value---".concat(sucess), "key---".concat(key));
console.log(Types.sucess);
