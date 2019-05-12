"use strict";
var age = 18;
var stature = 17.5;
console.log(age);
console.log(stature);
console.log('=========================>');
//字符串类型
var str = "string ,";
console.log(str);
console.log('=========================>');
//boolean类型
var flag = true;
console.log(flag);
console.log('=========================>');
//枚举类型
var REN;
(function (REN) {
    REN["nan"] = "nan ren";
    REN["nv"] = "nv ren";
    REN["zhong"] = "zhong";
})(REN || (REN = {}));
;
console.log(REN.nan);
console.log('=========================>');
//任意类型
var any = '';
any = true;
any = {};
console.log(any);
