function randomColor() {
    let result = Math.floor(Math.random() * 16777215).toString(16);
    return result;
}

const loading = document.getElementById('loading');
loading.style.width = '900px';
loading.style.display = 'flex';
loading.style.justifyContent = 'flex-start';
loading.style.alignItems = 'center';
loading.style.flexWrap = 'wrap';

window.onload = function () {
    loading.removeChild(loading.firstChild);
    for (i = 0; i < 3; i++) {
        const newDiv = document.createElement('div');
        loading.append(newDiv);
        newDiv.classList.add('new-div');
        newDiv.style.backgroundColor = `#${randomColor()}`;
        newDiv.innerHTML = `#${randomColor()}`;

        const closeDiv = document.createElement('div');
        newDiv.append(closeDiv);
        closeDiv.classList.add('close-div');
        closeDiv.innerText = 'x';

        closeDiv.addEventListener('click', function() {
            closeDiv.parentElement.remove();
        })
    }
};

const button = document.getElementById('btn-random');
const colorAmount = document.getElementById('color-amount');
const colorsList = document.getElementById('colors');

colorsList.style.width = '900px';
colorsList.style.display = 'flex';
colorsList.style.justifyContent = 'flex-start';
colorsList.style.alignItems = 'center';
colorsList.style.flexWrap = 'wrap';

button.addEventListener('click', function(e) {
    e.preventDefault();
    for (i = 0; i < colorAmount.value; i++) {
        const newListDiv = document.createElement('div');
        colorsList.append(newListDiv);
        newListDiv.classList.add('new-div');
        newListDiv.style.backgroundColor = `#${randomColor()}`;
        newListDiv.innerHTML = `#${randomColor()}`;

        const closeListDiv = document.createElement('div');
        newListDiv.append(closeListDiv);
        closeListDiv.classList.add('close-div');
        closeListDiv.innerText = 'x';

        closeListDiv.addEventListener('click', function() {
            closeListDiv.parentElement.remove();
        })
    }
});