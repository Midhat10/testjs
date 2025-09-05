import "./style.scss";
function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Midhat",
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello,
};

hello();
