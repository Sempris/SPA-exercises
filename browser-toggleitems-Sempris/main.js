const h1 = document.querySelector('h1');
const intro = document.getElementById('intro');
const list = document.getElementById('list');
const button = document.getElementById('button');
const listItems = document.querySelectorAll('a');
const select = document.getElementById('selection');

h1.classList.add('heading1');
intro.classList.add('intro');

list.style.width = '90%';
list.style.margin = '10px auto';

button.addEventListener('click', function () {
    list.classList.toggle('hide');
    list.classList.contains('hide') ? button.innerText = 'Show destinations' : button.innerText = 'Hide destinations';
});

listItems.forEach(item => {
    console.log(item);
    item.addEventListener('click', function (e) {
        console.log(e.target);
        let active = document.querySelector('.active');
        active.classList.remove('active');
        e.target.classList.add('active');
        select.innerHTML = `You have selected ${item.innerText}.`;
        select.classList.add('selection');
    });
});