const robotFactory = (model, mobile) => {
  return {
    model : model,
		mobile: mobile,
		beep () {
      console.log('Beep Boop');
    }
	};
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();

/* I created a factory function that can automatically create mulitple named instances of an object. By passing parameters to a factory function, I can customize the properties of the resultant object */
