const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
console.log(robot.provideInfo());

/* I used the "this" keyword to access the properties of a method from within that method */
