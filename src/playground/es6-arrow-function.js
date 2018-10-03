function square(x) {
  return x*x;
};

console.log(square(8));

//const squareArrow = (x) => {
  //return x*x;
//};

//const squareArrow = (x) => x * x;

//console.log(squareArrow(4));

const getTheFirstName = (fullName) => {
  return fullName.split(' ')[0];
}

console.log(getTheFirstName("Mike Smith"));

const FirstName = (fullName) => fullName.split(' ')[0];

console.log(FirstName('Mike Smith'));
