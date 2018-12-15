const robot = {
  energyLevel: 100,
  checkEnergy(){
// OR checkEnergy: function() [
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

/* I learned not to use arrow functions when using "this" in a method */
