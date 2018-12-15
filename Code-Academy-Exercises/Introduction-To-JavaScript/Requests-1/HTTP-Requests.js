console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

/* I saw how the value passed to the setTimeout function affects the order of pageloading */
