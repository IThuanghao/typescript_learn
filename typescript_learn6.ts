//函数类型
//1.函数定义类型和返回值
//2.设置函数默认值  函数可选参数
//3.参数是对象怎么定义
//4.函数this类型
//5.函数重载

function add(a: number, b: number): number {
  return a + b;

}
console.log(add(1, 2));

const add2 = (a: number, b: number): number => a + b;

console.log(add2(3, 4));

//2.设置函数默认值  函数可选参数
function add3(a: number = 2, b: number = 1) {
  return a + b;
}
console.log(add3());

//3.参数是对象怎么定义

interface User {    // 定义一个接口 约束对象 
  name: string;
  age: number;
}

function add4(user: User): User {
  return user;
}

console.log(add4({ name: "小昊", age: 20 }));

//4.函数this类型
interface Obj {
  user: number[];
  add: (this: Obj, num: number) => void;

}


let Obj = {
  user: [1, 2, 3],
  add(this: Obj, num: number) {
    this.user.push(num);
  },
}

Obj.add(4);

console.log(Obj)

//5.函数重载
