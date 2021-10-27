const firstAdder = document.querySelector('.add1');
const secondAdder = document.querySelector('.add2');
const addResult = document.querySelector('.result1');

const firstMinus = document.querySelector('.minus1');
const secondMinus = document.querySelector('.minus2');
const minusResult = document.querySelector('.result2');

const firstMultiplier = document.querySelector('.multiplier1');
const secondMultiplier = document.querySelector('.multiplier2');
const multiplierResult = document.querySelector('.result3');

const firstDivider = document.querySelector('.division1');
const secondDivider = document.querySelector('.division2');
const dividerResult = document.querySelector('.result4');

const firstModulo = document.querySelector('.modulo1');
const secondModulo = document.querySelector('.modulo2');
const moduloResult = document.querySelector('.result5');

firstAdder.addEventListener('change', function() {
    addResult.value = +firstAdder.value + +secondAdder.value;
});
secondAdder.addEventListener('change', function() {
    addResult.value = +firstAdder.value + +secondAdder.value;
});

firstMinus.addEventListener('change', function() {
    minusResult.value = +firstMinus.value - +secondMinus.value;
});
secondMinus.addEventListener('change', function() {
    minusResult.value = +firstMinus.value - +secondMinus.value;
});

firstMultiplier.addEventListener('change', function() {
    multiplierResult.value = +firstMultiplier.value * +secondMultiplier.value;
});
secondMultiplier.addEventListener('change', function() {
    multiplierResult.value = +firstMultiplier.value * +secondMultiplier.value;
});

firstDivider.addEventListener('change', function() {
    dividerResult.value = +firstDivider.value / +secondDivider.value;
});
secondDivider.addEventListener('change', function() {
    dividerResult.value = +firstDivider.value / +secondDivider.value;
});

firstModulo.addEventListener('change', function() {
    moduloResult.value = +firstModulo.value % +secondModulo.value;
});
secondModulo.addEventListener('change', function() {
    moduloResult.value = +firstModulo.value % +secondModulo.value;
});