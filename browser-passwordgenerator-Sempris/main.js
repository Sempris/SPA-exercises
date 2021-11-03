const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
const charArr = charset.split('');

function random() {
    let randomize = Math.floor(Math.random() * charArr.length);
    return randomize;
}

const output = document.querySelector('.output');
const button = document.querySelector('.btn');
const digits = document.querySelector('.digit-number');
const check = document.querySelector('.check');

function createPassword() {
    for (i = 1; i < Number(digits.value); i++) {
        let index = random(charArr);
        if (check.checked && i % 3 == 0) {
            output.innerHTML += charArr[index].toUpperCase();
        }
        else {
            output.innerHTML += charArr[index];
        }
    }
};

window.addEventListener('load', createPassword());

button.addEventListener('click', function () {
    output.innerHTML = '';
    createPassword();
});
