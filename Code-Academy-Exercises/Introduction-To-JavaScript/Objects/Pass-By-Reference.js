let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

const greenEnergy = spaceship => {
  spaceship['Fuel Type'] = 'avocado oil';
};

const remotelyDisable = spaceship => {
  spaceship.disabled = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
/* I permanently mutated an object by passing the object name as a parameter to a function */
