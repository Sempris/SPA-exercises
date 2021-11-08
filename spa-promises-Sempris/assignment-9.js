/*

Assignment 9 - Another example

Below you will find a function call which expects a Promise to be returned

1. Write a function called "parseFromString", which receives one argument called "string"

2. In the function "parseFromString" return a new Promise

3. Inside the callback for your Promise,

    1. Reject the Promise if the "string" value is not present with a new Error object - write an appropriate error message

    2. Resolve the Promise if the "string" value is present

4. Test your code

*/

function parseFromString() {
    return new Promise((resolve, reject) => {
        if (string) {
            resolve();
        }
        else {
            reject(new Error('No string was provided'));
            return;
        }
    });
}

const string = "{\"name\":\"Fortran\"}";

const parserResult = parseFromString(string);

parserResult.then(() => {
    console.log('The string was parsed');
});

parserResult.catch((error) => {
    console.log(error);
});
