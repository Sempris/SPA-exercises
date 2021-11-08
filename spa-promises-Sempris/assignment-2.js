/*

Assignment 2 - storing a promise in a variable

Below you will find a function which returns a Promise

Write some code which:

1. Calls the function "loadMusicTrack" and stores the result (the Promise object) in a variable

2. Call the method "then" on your variable

3. Pass a callback into the method "then". The callback should receive one argument "message". Inside the callback, call the console method console.log(), but this time -  to display the value of the argument "message"

4. Test the application

*/

function loadMusicTrack() {
    return new Promise((resolve) => {

        setTimeout(() => {

            resolve('Track has been loaded');

        }, 4000);

    });
}

const load = loadMusicTrack();
load.then((message) => {
    console.log(message);
})