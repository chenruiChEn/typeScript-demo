"use strict";
//函数的参数定义 
// 1.必传参数
function search(age) {
    return "\u627E\u5230\u4E86" + age + "\u4EBA";
}
var result = search(4);
console.log(result);
console.log('=================================>');
// 2.有默认值的参数 ， 选传参数  
function search2(age, str) {
    if (age === void 0) { age = 0; }
    return "\u627E\u5230\u4E86" + age + " \u4EBA \uFF0C" + str;
}
console.log(search2(5, '长得都很高'));
console.log('=================================>');
// 3.参数数量不限
function arrHandle(age) {
    if (age === void 0) { age = 0; }
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    arr.forEach(function (v, i) {
        arr[i] += age;
    });
    return arr.join(',');
}
console.log(arrHandle(5, '1234', '2234', '3234'));
console.log('=================================>');
// 4. 3种函数的定义方式
function Handle1() {
}
//匿名函数
var Handle2 = function () {
};
//箭头函数
var Handle3 = function () {
};
