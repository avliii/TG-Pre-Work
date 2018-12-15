const bobsFollowers = ['Buddy', 'Pal', 'Friendo', 'Amiga'];
const tinasFollowers = ['Pal', 'Amigo', 'Friendo'];
let mutualFollowers = [];
for (let i= 0; i < bobsFollowers.length; i++){
  for (let j=0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
console.log(mutualFollowers);
/* I used nested loops to compare the contents of two arrays */
