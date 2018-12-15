const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Needs an object argument
const robotKeys = Object.keys(robot);
console.log(robotKeys);

const robotEntries = Object.entries(robot);
console.log(robotEntries);

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

/* I learned that JavaScript's built-in methods can be applied to custom objects, including several Object class methods*/
