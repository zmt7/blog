# js相关知识

## 类型判断

- **typeof**

typeof只能识别简单基本数据类型(比如：number,string,boolean),对于复合类型(Object,Array,Function),只能识别Function;

```js
//测试
typeof 2 //number
typeof '2' //string
typeof true //boolean
typeof Array //object
typeof Object //object
typeof function () {} //function
typeof undefined //undefined
typeof {} // object
typeof [] // object
typeof null // object
```

如果非要用typeof,可以加逻辑区分(一定程度上可以简单区分上面几种类型)

```js
/**
 * @param  data 需要判断的数据(number,string,boolean,undefined,Function,Object,Array)
 */
function isType(data){
  const type = typeof data;
  if(type === 'object' &&  Array.isArray(data)) return 'array';
  if(type === 'object' && !data) return 'null'
  return type;
}

//测试
isType('2')  //string
isType(Array) //array
isType({}) //object
isType(null) //null
```

- **instanceof**

instanceof 运算符(语法：obj instanceof type)判断obj是不是type类的实例,type的原型对象是否是obj的原型链上的某个对象(只可用来判断引用数据).

```js
/**
 * @param Fn 判断type类型的构造函数
 * @param obj 需要判断的type类型的实例对象
*/
function myInstanceof(Fn,obj){
  //构造函数的原型
  const prototype = Fn.prototype;
  //实例对象的原型
  let proto = obj.__proto__;
  // 直到找到或者不存在的时候为止
  while(proto) {
    if(prototype === proto){
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
}

//测试
console.log(Object instanceof Object) //true
console.log(Function instanceof Function) //true
console.log(Number instanceof Number) //false
console.log(String instanceof String) //false
console.log(Function instanceof Object) //true

const obj = {};
const func = function(){
  console.log('我是一个函数实例')
}
console.log(myInstanceof(Object,obj)) //true
console.log(myInstanceof(Function,func)) //true
console.log(myInstanceof(Object,'1111')) //true 虽然也是true 但是instanceof 只用来判断引用类型
```

## 作用域

## 闭包

## 垃圾回收机制


