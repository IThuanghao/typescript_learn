//联合类型
let phone: string | number = 1213314
//如果用any数据就不安全了


let fn = function (type: number | boolean): boolean {
  return !!type
}
let result = fn(!true)

console.log(result);

//交叉类型
interface People {
  name: string,
  age: number
}
interface Man {
  sex: string
}

const xiaohao = (man: People & Man): void => {
  console.log(man)
}

xiaohao({
  name: "小昊今天很累了",
  age: 20,
  sex: "男"

})

//类型断言
let fn1 = function (num: number | string): void {
  console.log((num as string).length);
}
fn1('1231')

interface A {
  apple: string
}

interface B {
  tesla: string
}

let fn2 = (type: A | B): void => {
  console.log((<A>type).apple);

  // console.log((type as A).apple);两种写法
}

fn2({
  tesla: 'cyberturk'
})
//显示undefined
//类型断言不能乱用，能骗ts不报错但打印不出来

