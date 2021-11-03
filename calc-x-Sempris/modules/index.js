import { modulo, percentage, percentageOf, difference } from './percentage.js';
import { fixRoundingErrors, calculateAspectRatio } from './aspect-ratio.js';

const modulo1 = document.getElementById('modulo_1');
const modulo2 = document.getElementById('modulo_2');
const moduloResult = document.getElementById('modulo_result');

modulo1.addEventListener('change', function () {
    if (modulo1.value > 0 && modulo2.value > 0) {
        moduloResult.value = modulo(modulo1.value, modulo2.value);
        fixRoundingErrors(moduloResult.value);
    }
});
modulo2.addEventListener('change', function () {
    if (modulo1.value > 0 && modulo2.value > 0) {
        moduloResult.value = modulo(modulo1.value, modulo2.value);
        fixRoundingErrors(moduloResult.value);
    }
});

const percentage1 = document.getElementById('percentage_1');
const percentage2 = document.getElementById('percentage_2');
const percentageResult = document.getElementById('percentage_result');

percentage1.addEventListener('change', function () {
    if (percentage1.value > 0 && percentage2.value > 0) {
        percentageResult.value = percentage(percentage1.value, percentage2.value);
        fixRoundingErrors(percentageResult.value);
    }
});
percentage2.addEventListener('change', function () {
    if (percentage1.value > 0 && percentage2.value > 0) {
        percentageResult.value = percentage(percentage1.value, percentage2.value);
        fixRoundingErrors(percentageResult.value);
    }
});

const percentageOf1 = document.getElementById('percentageOf_1');
const percentageOf2 = document.getElementById('percentageOf_2');
const percentageOfResult = document.getElementById('percentageOf_result');

percentageOf1.addEventListener('change', function () {
    if (percentageOf1.value > 0 && percentageOf2.value > 0) {
        percentageOfResult.value = percentageOf(percentageOf1.value, percentageOf2.value);
        fixRoundingErrors(percentageOfResult.value);
    }
});
percentageOf2.addEventListener('change', function () {
    if (percentageOf1.value > 0 && percentageOf2.value > 0) {
        percentageOfResult.value = percentageOf(percentageOf1.value, percentageOf2.value);
        fixRoundingErrors(percentageOfResult.value);
    }
});

const difference1 = document.getElementById('difference_1');
const difference2 = document.getElementById('difference_2');
const differenceResult = document.getElementById('difference_result');

difference1.addEventListener('change', function () {
    if (difference1.value > 0 && difference2.value > 0) {
        differenceResult.value = difference(difference1.value, difference2.value);
        fixRoundingErrors(differenceResult.value);
    }
});
difference2.addEventListener('change', function () {
    if (difference1.value > 0 && difference2.value > 0) {
        differenceResult.value = difference(difference1.value, difference2.value);
        fixRoundingErrors(differenceResult.value);
    }
});

const ratio1 = document.getElementById('ratio_1');
const ratio2 = document.getElementById('ratio_2');
const ratioResultWidth = document.getElementById('ratio_result-width');
const ratioResultHeight = document.getElementById('ratio_result-height');

function arW() {
	ratioResultHeight.value = calculateAspectRatio(ratio1.value, ratio2.value, ratioResultWidth.value, "w");
}
function arH() {
	ratioResultWidth.value = calculateAspectRatio(ratio1.value, ratio2.value, ratioResultHeight.value, "h");
}
ratioResultWidth.addEventListener("keyup", arW);
ratioResultHeight.addEventListener("keyup", arH);