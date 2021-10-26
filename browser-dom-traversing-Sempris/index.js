const header = document.querySelector('.heading');
const closest = header.closest('h1');
const infoSection = document.querySelector('.info');
const infoPackageSection = document.querySelector('.info-package');
const packageTitle = document.querySelectorAll('.package-title');
const labels = document.querySelectorAll('label');
const navList = document.querySelector('.nav-list');
const siteMap = document.querySelector('.site-map');

closest.style.borderBottom = '5px solid grey';

function borderImage() {
    if (infoSection.hasChildNodes('.info-package')) {
        [...packageTitle].forEach(item => {
            item.previousElementSibling.style.border = '3px solid blue';
        })
    }
}
borderImage();

function labelCheck() {
    [...labels].forEach(item => {
        item.classList.contains('mild') ? item.style.borderBottom = '2px solid yellow' :
            item.classList.contains('intense') ? item.style.borderBottom = '2px solid orange' :
                item.style.borderBottom = '2px solid red';
    })
}
labelCheck();

function siteMapping() {
    const navItems = navList.children;
    const siteMapItems = [...navItems];
    siteMapItems.forEach(item => {
        siteMap.append(item);
    })
}
siteMapping();