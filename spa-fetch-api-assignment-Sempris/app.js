async function getData() {
    try {
        const people = await fetch('https://reqres.in/api/users');
        const peopleReceived = await people.json();
        console.log(peopleReceived.data);
        peopleReceived.data.map(item => {
            document.getElementById('main').innerHTML +=
            `<div class="card" style="width: 15rem;">
            <img src="${item.avatar}" class="card-img-top" alt="...">
            <h5 class="card-title">${item.first_name}</h5>
            <p class="card-text">${item.email}</p></div>`;
        })
    }
    catch (error) {
        document.getElementById('main').innerHTML += `<div class="err-msg">Error: ${error.message}</div>`
    }
}

getData();