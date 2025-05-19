//大写的Object理解为包装对象
let a:Object = 123
let a1:Object ='123'
let a2:Object =[] //数组
let a3:Object ={}//对象
let a4:Object =()=>123//函数

//小写的object不能用原始类型，可以用引用类型
//一般常用于泛型约束
let b:object = "13"//错误
let b2:object = 123//错误
let b3:object =true //错误
let b4:object = {}//正确
let b5:object = []//正确
let b6:object = ()=> 123//正确


//空对象 字面量模式
let c:{} = 123 // 理解成new object 支持
let c1:{} = "13"
let c2:{} ={}
let c3:{} =[]

//虽然他可以赋值，但是没有办法修改
//还是少用比较好
let d:{} = {name:1}

d.age = 2 //无法给变量进行赋值的操作

