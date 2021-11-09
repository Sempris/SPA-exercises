## Async await assignment

We have a “regular” function called `getResult`. How can you call the `async` function `wait()` and use its result inside of `getResult`?

```javascript
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return 'Hello World';
}

function getResult() {
  // ...what should you write here?
  // we need to call async wait() and wait to get Hello World
  // remember, we can't use "await"
 
 
 
}
getResult()
```