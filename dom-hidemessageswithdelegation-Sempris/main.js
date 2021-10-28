document.addEventListener('click', function(e){
    if(e.target.className == 'remove-button') {
        e.target.parentElement.remove();
    }
})