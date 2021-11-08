/*

Assignment 8 - Rejecting a promise

Below you will find a function call which expects a Promise to be returned

You will also find the function "loadGraphic" has been prepared for you

1. On line 20, inside the Promise callback check if the "graphic" argument is available. If it is not, reject it with the reject() method

2. Instantiate the Error object using the "new" keyword. Use the message "No graphic was provided" in the Error.

3. Test your code

*/

function loadGraphic(graphic) {
    return new Promise((resolve, reject) => {
        if (graphic) {
            resolve();
        }
        else {
            reject(new Error('No graphic was provided'));
            return;
        }
    });
}

const graphic = loadGraphic('PNG');

graphic.then(() => {
    console.log('Graphic was loaded');
});

graphic.catch((error) => {
    console.log(error);
});
