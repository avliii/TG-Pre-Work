const getData = async () =>{
  try{
  const response = await fetch('https://api-to-call.com/endpoint')
  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse;
  }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
};

/* I constructed the boilerplate code that will use an async function to return a promise. Away allows the program to run
while waiting on a promise. The try...catch blocks are run the try and the catch in an error.*/
