async function wait() {
	await new Promise(resolve => setTimeout(resolve, 3000));

	return 'Hello World';
}

function getResult() {
	wait().then(result => console.log(result));
}

getResult();

// Assignment 2

function randomImg() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('https://picsum.photos/200/300?random=1');
		}, 2000);
	});
}

async function getImg() {
	let result = await randomImg();
	let img = document.createElement('img');
	img.src = result;
	document.body.append(img);
}

getImg(); // image inside the body   <-- after 2 seconds

// Assignment 3

async function getOffers() {
	return Promise.resolve('the are 10 offers 😀  ');
	// return Promise.reject(new Error('sorry we have an error connecting to the server! '))
}

async function catchFunction() {
	try {
		return await getOffers();
		// here you need to call getOffers using await 
		// you need to return the value of calling getOffers

	} catch (err) {
		// here you need to log the error message
		console.log(err);
		return 'no data found 😑';
	}
}

async function run() {
	const value = await catchFunction();
	console.log(value);
}

run();