document.addEventListener('DOMContentLoaded', function() {
    console.log("Hello");
    let pages = document.getElementById('pages');
    let menu = document.getElementById('menu');
    if (pages !== undefined){
        menu.addEventListener('click', ()=>{
            pages.classList.toggle('show');
        })

    }
});