/*

Assignment 7 - Creating an error

In this exercise, you will be creating an Error object

1. Instantiate the "Error" constructor object using the "new" keyword. Use the message "No graphic was provided" in the Error.

> Hint: Error is a constructor, just like a class or a Promise, or Date

2. Test your code to see what happens

*/

function loadGraphic(graphicOptions) {
    return new Promise((resolve, reject) => {

        if (!graphicOptions) {
            reject(new Error('No graphic was provided'));
            return;
        }
        resolve(`Graphic type ${graphicOptions} has been loaded`);
    });
}

const graphicOptions = 'PNG';

loadGraphic(graphicOptions)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });