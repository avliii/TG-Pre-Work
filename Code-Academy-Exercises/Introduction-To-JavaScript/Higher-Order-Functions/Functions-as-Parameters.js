const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

/*I've tried several variations of this, but it keeps throwing errors and the "Solution" button is bugged and there's stupidly no way to reset the checkmark progress, so I have no idea what I'm doing wrong.*/
