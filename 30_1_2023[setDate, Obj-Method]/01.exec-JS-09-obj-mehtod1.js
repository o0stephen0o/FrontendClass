var name ="global";
var obj1 ={
    name : "obj1",
    fun1 : function() {
        console.log("from fun1 on oj1");
        console.log(this);
        console.log(this.name);

    }
};

obj1.fun1();

var obj2 = {
    name : "obj2",
    fun2 : obj1.fun1
};
obj2.fun2();