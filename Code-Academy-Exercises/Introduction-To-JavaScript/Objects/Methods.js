let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat: function () {
    console.log(retreatMessage);
  },
  takeOff: function() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}
alienShip.retreat();
alienShip.takeOff();
/* I learned that an object that store functions as data have methods, with the method name stored as the key and the value being an anonymous function expression */
