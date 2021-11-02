function randomTreeImg() {
    let randomTree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return randomTree;
}

function randomTreeCount() {
    let randomCount = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    return randomCount;
}

function randomInsectCount() {
    let randomInsect = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
    return randomInsect;
}

function randomX() {
    let x = Math.floor(Math.random() * (document.body.clientWidth - 100 + 1)) + 1;
    return x;
}

function randomY() {
    let y = Math.floor(Math.random() * (document.body.clientHeight - 100 + 1)) + 1;
    return y;
}

function createTrees() {
    for (i = 0; i < randomTreeCount(); i++) {
        const tree = document.createElement('IMG');
        tree.src = `./images/tree-${randomTreeImg()}.png`;
        tree.style.top = `${randomY()}px`;
        tree.style.left = `${randomX()}px`;
        document.body.appendChild(tree);
    }
}

var counter = 0;
var bossCounter = 0;

function createInsects() {
    let insectCount = randomInsectCount();
    for (i = 0; i < insectCount; i++) {
        const insect = document.createElement('IMG');
        insect.src = `./images/mosquito.png`;
        insect.classList.add('mosquito');
        insect.style.top = `${randomY()}px`;
        insect.style.left = `${randomX()}px`;
        document.body.appendChild(insect);

        const count = document.getElementById('counter');
        insect.addEventListener('click', function () {
            insect.style.display = 'none';
            counter++;
            insectCount--;
            count.innerText = counter;

            if (insectCount < 10) {
                createInsects();
            }

            if (counter == 100) {
                const all = document.querySelectorAll('.mosquito');
                all.forEach(element => {
                    element.style.display = 'none';
                });

                const boss = document.createElement('IMG');
                boss.src = `./images/mosquito.png`;
                boss.style.width = '500px';
                boss.style.height = '500px';
                insect.style.top = `50%`;
                insect.style.left = `50%`;
                document.body.appendChild(boss);
                count.style.display = 'none';

                boss.addEventListener('click', function() {
                    boss.classList.add('blink');
                    bossCounter++;
                    setTimeout(() => {
                        boss.classList.remove('blink');
                    }, 500);

                    if (bossCounter == 10) {
                        boss.style.display = 'none';
                        const end = document.createElement('IMG');
                        end.src = `./images/end.jpg`;
                        end.classList.add('end');
                        document.body.appendChild(end);
                    }
                })
            }
        });
    }
}

createTrees();
createInsects();