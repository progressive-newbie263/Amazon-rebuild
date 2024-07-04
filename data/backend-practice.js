const xhr = new XMLHttpRequest();

/*
  in order to get the response, need to wait until it come back first.
  Let's do the code below:
*/

xhr.addEventListener('load' , () => {
  console.log(xhr.response); //this will not be undefined
});

/*
  xhr.open(method, url) 
  method is put, post, delete,... and url is https://domainname
*/

/*
  - xhr.open('GET', 'https://supersimplebackend.dev/products/first'); result in an object, JSON string
  - xhr.open('GET', 'https://supersimplebackend.dev'); //hello, this is supersimpledev backend page .... in console
  - xhr.open('GET', 'https://supersimplebackend.dev/hello'); will show a message 'this is the URL path /hello'
  - xhr.open('GET', 'https://supersimplebackend.dev/not-supported'); will show a red message 404 code showing it not found.
  - xhr.open('GET', 'https://supersimplebackend.dev/documentation'); //return html content
  - xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');//return an image.

  - in short, using the browser is basically use making a 'GET' request.
*/
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');

/*
  - send the request; xhr.response(); undefined atm, in short, not responded right away. Asynchronous code
  - if send a request to URL path not supported, backend respond with an error.
  - if status code start with either 4 or 5 (400, 404, 500, etc...) it is most likely resulted in failed
  - on the other hand, if status code start with 2 (200, 201, 204, etc...) it is most likely succeeded.
*/

xhr.send(); 

