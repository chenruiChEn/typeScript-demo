class xiaojiejie{
    public sex:string;
    protected name:string;
    private age:number;
    constructor(sex:string,name:string,age:number){
        this.sex = sex
        this.name = name
        this.age = age
    }
    public hello():string{
        return 'hello'
    }
    protected hello2():string{
        return 'hello2'
    }
}

let jiejie:xiaojiejie = new xiaojiejie('nv','林志玲',18)
console.log(jiejie.hello())
console.log(jiejie.sex)