const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

xhr.open('GET', url);
xhr.send();

/* I created the function and parameters necessary to make a simple XHR GET request.
After creating the object, assigning the URL and response formatting, I create an
anonymous arrow function, and add  loop that evaluates whether if the request has finished,
then return the response. The actual request is created and sent in the last two lines. */
