//函数的参数定义 
// 1.必传参数
function search(age:number):string{
    return `找到了${age}人`
}

let result:string = search(4);
console.log(result)
console.log('=================================>')
// 2.有默认值的参数 ， 选传参数  
function search2( age:number = 0,str?:string):string{
    return `找到了${age} 人 ，${str}`
}
console.log(search2(5,'长得都很高'))
console.log('=================================>')
// 3.参数数量不限
function arrHandle (age:number=0,...arr:string[]):string{
    arr.forEach((v,i)=>{
        arr[i] += age
    })        
    return arr.join(',')
}
console.log(arrHandle(5,'1234','2234','3234'))

console.log('=================================>')
// 4. 3种函数的定义方式
function Handle1():void{

}
//匿名函数
let Handle2 = function():void{

}
//箭头函数
let Handle3 = ():void=>{

}