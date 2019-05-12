"use strict";
var xiaojiejie = /** @class */ (function () {
    function xiaojiejie(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    xiaojiejie.prototype.hello = function () {
        return 'hello';
    };
    xiaojiejie.prototype.hello2 = function () {
        return 'hello2';
    };
    return xiaojiejie;
}());
var jiejie = new xiaojiejie('nv', '林志玲', 18);
console.log(jiejie.hello());
console.log(jiejie.sex);
