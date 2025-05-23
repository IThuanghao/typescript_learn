//数组类型
//number[]
//Array<boolean>
//定义数组的普通类型
//定义对象数组使用interface
//二维数组

let arr:number[] = [1,2,3,4,5]
// 在number后面加个[]就代表数组了

let arr1:boolean[] = [true,false]

let arr2:Array<boolean>= [true,false]

//-----------------------------------
interface X {
    name:string 
    age?:number 
}
let Arr: X[] = [{name:"小满"},{name:"xaiaomi"} ]

//-----------------------------------
//二维数组 number[][]  
let arr3:number[][] =[[1],[2],[3]]
//使用泛型 套娃
let arr4: Array<Array<number>>= [[1],[2],[3]]
//更推荐number[][]

//大杂烩数组  any[]
let 