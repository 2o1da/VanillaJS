function sayHello(name, score) {
  // console.log(`Hello ${name}! You've got ${score}.`) // `` > '' ""
  return `Hello ${name}! You've got ${score}.`
}

sayHello("DaSol", 100); // 2 arguments

const love = sayHello("민정", 200)
console.log(love);

const caculator = {
  plus: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  }
}

const x = caculator.plus(2, 5);
const y = caculator.subtract(10,0);
console.log(x);
console.log(y);f