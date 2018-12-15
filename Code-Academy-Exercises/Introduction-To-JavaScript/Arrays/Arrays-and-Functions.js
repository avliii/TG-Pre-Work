const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);
const removeElement = (newArr) => {
  newArr.pop()
}
removeElement(concept);
console.log(concept);
/* I learned that mutations to arrays persist outside of function blocks */
