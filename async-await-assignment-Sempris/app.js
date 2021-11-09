async function wait() {
	await new Promise(resolve => setTimeout(resolve, 3000));

	return 'Hello World';
}

function getResult() {
	wait().then(result => console.log(result));
}

getResult();