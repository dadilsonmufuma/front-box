function menuShow(){
    let a=document.querySelector(".mobile-menu");
    a.classList.contains("open")?(a.classList.remove("open"),document.querySelector(".icon").src="./img/menu_white_36dp.svg"):(a.classList.add("open"),document.querySelector(".icon").src="./img/close_white_36dp.svg")}