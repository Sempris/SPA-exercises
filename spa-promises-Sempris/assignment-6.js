/*

Assignment 6 - Resolving a promise with a value

Below you will find a function call which expects a Promise to be returned

1. Write a function called "loadGraphic"

2. Place the variable "graphicOptions" inside the function "loadGraphic"

3. Inside the function, return a Promise object, and immediately resolve() it with the variable "graphicOptions"

*/

function loadGraphic() {
    const graphicOptions = {
        type: 'PNG'
    };
    return new Promise((resolve) => {
        resolve(graphicOptions);
    });
};

const graphic = loadGraphic();

graphic.then((options) => {
    console.log('Graphic was loaded', options);
});