//EcmaScript

// 块级作用域是指在代码中由一对花括号（{}）包围的区域，该区域内声明的变量和常量在区域外部是不可访问的
const obj = {}; //这个不是块级作用域

// 打印出来结果是apple不是pear
// 在块里面声明的变量在外面不会被扫到
let fruit = 'apple';
if (true) {
    //这里声明的变量跟外面的fruit没有关系
  let fruit = 'pear';
}
console.log(fruit); // apple

//hoisting变量提升
console.log(x); // 之前会输出: undefined
var x = 5;
//ES6
console.log(fruit1); // Uncaught ReferenceError: Cannot access 'fruit' before initialization
let fruit1 = 'apple';

//const
const person = { name: 'Alice', age: 30 };
person.age = 31; // 可以修改对象的属性
person.gender = 'female'; // 可以添加新的属性
console.log(person); // 输出: { name: 'Alice', age: 31, gender: 'female' }

// function 以下是可以正常运行的
function bar(){
  console.log(foo);
}
const foo = 1;
bar();

// quiz 1
var i = 5;
// var重新声明
for (var i = 0; i < 3; i++) {
  console.log(i);
}
// output: 0 1 2 3
// i = 3的时候终止循环 但是最终还是打印了3
console.log(i);

// quiz 2
let i = 5;
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// output: 0 1 2 5
console.log(i);

// quiz 3
var arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {    // i < 4
  setTimeout(function () {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 1000);
}
// output: 输出四次undefined
// 如果换成let 就可以正常输出

// back tick
const name = 'mason';
const age = 104;
console.log(`My name is ${name}, and I'm ${age} years old`);

// 展开运算符
const array = [1, 2];
const newArray = [...array, 3, 4];
console.log(newArray); // [1, 2, 3, 4]

// 展开之后如果重复了，后面的会把前面的给覆盖掉
const f = { name: 'apple', color: 'green' };
let newFruit = { ...f, color: 'red' };
console.log(newFruit); // {name: "apple", color: "red"}
newFruit = { color: 'red', ...f };
console.log(newFruit); // {color: "green", name: "apple"}

//Destructuring

// Default parameters
function sum(a = 1, b = 1) {
  return a + b;
}
console.log(sum()); // 2
console.log(sum(undefined, 2)); // 3
console.log(sum(3, 4)); // 7、

// function
//callback
//closure闭包

