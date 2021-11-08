/*

Assignment 3 - storing a promise in a variable

Below you will find a function which returns a Promise

Write some code which:

1. Calls the function "loadMusicTrack" and stores the result (the Promise object) in a variable

2. Call the method "then" on your variable

3. Pass a callback into the method "then". The callback should receive one argument "message". Inside the callback, call the console method console.log() to display the value of the argument "message"

4. In a separate statement, call the method "catch" on your variable

5. Pass a callback into the method "catch". The callback should receive one argument "error". Inside the callback, call the console method console.log(), but this time -  to display the value of the argument "error"

6. Test the application, trying:
    - Pass a value into the function "loadMusicTrack". What do you see in the console?
    - Do not pass a value into the function "loadMusicTrack". What do you see in the console?

*/

function loadMusicTrack(track) {
    return new Promise((resolve, reject) => {

        if(!track) {
            reject(new Error('Unable to load track'));

            return;
        }

        setTimeout(() => {

            resolve(`Music track ${track} has been loaded`);

        }, 4000);

    });
}

const track = '"We are the Champions"';

const load = loadMusicTrack();
load.then((message) => {
    console.log(message);
});

load.catch((error) => {
    console.log(error);
});