import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
//import '../data/cart-class.js';   
//import '../data/cart-oop.js';
//import '../data/car.js'; //lesson 17
//import '../data/backend-practice.js'; lesson 18 practice file;

//resolve is a function, that is similar to done() in jasmine.
//allow us to have control over when to run the function.
    
/*
  - You might think the loadProducts set of codes is the next one running
  but actually, loadProduct into resolve() and loadProduct into render are 
  running at the same time.

  - when promises finishes, next step followed after resolve() will be runned
  
  - Callback has a big problem. Multiple callbacks cause a lot of nesting

  - A promise can have many steps, these kind of functioning make sure you
  finished each step before going in the next step.
*/

/*async await is a way to shorten the promise code, async a function is 
equal to function loadPage, then return new resolved promise.
*/

async function loadPage() {
  //note: catch needs to be on the same line as the end bracket of try.
  //try-catch do not have to be used with async await
  /*  note: 
    try-catch should not be used everywhere. It should only be used
    to handle unexpected error.
  */
 
  try {
    //throw create an error to be used for try-catch
    //throw do not work in the future, only if it doesnt have 'reject'
    //throw 'error1'; //this did work.

    /* this will be comment out, as 18h example requested.
    //reject() is a function, it lets us create an error in the future.
    const value = await new Promise((resolve, reject) => {
      //create error, 1st way: // throw 'error2';
      loadCart(() => {
        //reject('error3'); //create an error after loading cart
        resolve('value3');
      });
    });
    */

    /* code before 18i
    await loadProductsFetch();  //await can only be used when inside an async function
    await loadCartFetch(); //18h
    */

    //18i
    await Promise.all([
      loadProductsFetch(), //return promises
      loadCartFetch()
    ]);
  } catch(error) {
    console.log('Unexpected Error. Please try again later.');
  };
 
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();





/*

CODE for loading the products 

//promise.all can help us execute all the promises at the same time
Promise.all([
  loadProductsFetch(), //return promises

  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1'); //value1 in here allow us to use it in the value of next function
  });

}).then((value) => {
  //console.log(value); //in console will have 'value1' string.
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}); 
*/


/*
loadProducts(() => {
  loadCart(() => {
    //we want to wait until cart and product to load before rending page    
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });

});
*/




