const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }

  console.log(lightWaves);
};

logVisibleLightWaves();
/* I learned the importance of tightly scoping variables */
