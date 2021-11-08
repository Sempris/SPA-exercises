/*

Assignment 10 - Adding a real error

We will build on the example we created in the previous assignment

1. Write a function called "parseFromString", which receives one argument called "string"

2. In the function "parseFromString" return a new Promise

3. Inside the callback for your Promise write a "try, catch" statement

4. Inside the "try" part of the statement, run the JSON.parse() method on the argument "string"

5. If the JSON.parse() method fails for whatever reason, the "catch" part of the statement will be called.

6. Inside the "catch" part of the statement, use the reject() method. Inside the call for the reject() method, provide the error given by the "catch"

7. Test your code, first providing the "data" variable into the function call for "parseFromString", and without. Note your results.

*/

function parseFromString() {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(data));
        }
        catch (err) {
            reject(new Error('No string was provided'));
            return;
        }
    });
};

const data = "{\"name\":\"Fortran\"}";

const parserResult = parseFromString(data);

parserResult.then((parsedValue) => {
    console.log('The string was parsed to:', parsedValue);
});

parserResult.catch((error) => {
    console.log(error);
});
