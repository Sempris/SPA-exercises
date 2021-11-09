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