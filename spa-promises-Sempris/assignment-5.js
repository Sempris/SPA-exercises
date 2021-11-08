/*

Assignment 5 - Resolving a promise

Below you will find a function call which expects a Promise to be returned

1. Write a function called "loadGraphic"

2. Inside the function, return a Promise object

3. Create a callback inside the Promise. In the callback, write the reference "resolve" as an argument

4. "resolve" is a reference to a method which resolves the Promise. Call this method inside your callback.

*/

function loadGraphic() {
    return new Promise((resolve) => {
        resolve();
    });
};

const graphic = loadGraphic();

graphic.then(() => {
    console.log('Graphic was loaded');
});
