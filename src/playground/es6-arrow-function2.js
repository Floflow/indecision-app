// argument object -  no longer bound with arrow function

const add = (a,b) => {
  return a + b;
}

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: "Andrew",
  cities: ['Philadelphia', 'NY', 'Dublin'],
  printPlacesLived() {

    return this.cities.map((city) => this.name+ " has lived in " + city);

  }
};

console.log(user.printPlacesLived());


// challenge area

const multiplier = {
  //numbers - array of numbers
  numbers: [1,2,3],
  // multiplyBy - single number
  multiplyBy: 6,
  // multiply - return a new array where nubers have been multplied
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());
