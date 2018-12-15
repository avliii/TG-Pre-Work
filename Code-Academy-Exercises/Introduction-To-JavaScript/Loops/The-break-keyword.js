const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let rapperArrayIndex = 0; rapperArrayIndex < rapperArray.length; rapperArrayIndex++){
  console.log(rapperArray[rapperArrayIndex]);
  if (rapperArray[rapperArrayIndex] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");
/* I used a break keyword to break out of a loop. RapperArrayIndex is an unwieldy variable name for a counter, but I guess we can't use x all the time */
