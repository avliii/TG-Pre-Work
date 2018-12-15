fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json();
  }
  },
   networkError => {
    console.log(networkError.message);
  throw new Error('Request failed!');
}).then(jsonResponse => {
  return jsonResponse;
})

/* I created the boilerplate coded needed to use fetch function to create a GET request */
