const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
const charArr = charset.split('');

function random() {
    let randomize = Math.floor(Math.random() * charArr.length);
    return randomize;
}

const output = document.querySelector('.output');
const button = document.querySelector('.btn');
const digits = document.querySelector('.digit-number');
const check = document.querySelector('.check').value;

function createPassword() {
    for (i = 0; i < Number(digits.value); i++) {
        output.innerHTML += charArr[random(charArr)];
        if (check == 'on' && i % 3 == 0) {
            output.innerHTML += charArr[random(charArr)].toUpperCase();
        }
    }
};

window.addEventListener('load', createPassword());

button.addEventListener('click', function () {
    output.innerHTML = '';
    createPassword();
});