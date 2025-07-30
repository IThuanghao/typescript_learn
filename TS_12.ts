//类型推断|类型别名
let str = '干'
//他能推的出来是什么东西就不要再多写一遍类型

let add
add = 13
add = 'ad'
//两个不一样的直接推出来 any类型

let f = (name: string): void => { };

type num = 1 extends number ? 1 : 0
//extends 在type里面的意思是包含
//左边的值 会作为右边类型的子类型
//1.any unknow
//2.Object
//3.Number String Boolean
//4.number string boolean
//5. 1 'text' true
//6. never