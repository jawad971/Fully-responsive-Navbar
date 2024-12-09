


const side = document.querySelector('#show');

side.addEventListener('click',() =>{
    const sideBar = document.querySelector('.sideBar');
    sideBar.style.display = "flex";
});


const hide = document.querySelector('#hide');

hide.addEventListener('click',() =>{
    const sideBar = document.querySelector('.sideBar');
    sideBar.style.display = "none";
})