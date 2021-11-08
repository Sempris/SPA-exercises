/*

Assignment 4 - Chaining

Below you will find a function which returns a Promise

Some methods allow us to "chain" multiple methods - methods attached the end of the method.

This is because the method returns an object which includes the original object.

Promises can be chained as well.

examplePromise() // returns the promise
    .then() // returns the same promise
    .catch(); // returns the same promise

1. Copy and paste below your result for Assignment 3

2. Modify your code to use chaining for the methods "then" and "catch" instead of calling these as separate statements

    > Hint: You will have to remove your variable

3. Test the application, trying:
    - Pass a value into the function "loadMusicTrack". What do you see in the console?
    - Do not pass a value into the function "loadMusicTrack". What do you see in the console?

*/

function loadMusicTrack(track) {
    return new Promise((resolve, reject) => {

        if (!track) {
            reject(new Error('Unable to load track'));

            return;
        }

        setTimeout(() => {

            resolve(`Music track ${track} has been loaded`);

        }, 4000);

    });
}

const track = '"We are the Champions"';

loadMusicTrack()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });