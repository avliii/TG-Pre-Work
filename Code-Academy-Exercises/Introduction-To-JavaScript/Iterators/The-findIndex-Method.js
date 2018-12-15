const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

//console.log(foundAnimal, startsWithS);

/* I used the findIndex method, which returns the index of the first element of an array evaluated to true by a callback function.*/
