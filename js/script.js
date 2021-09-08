let menu = document.querySelector('#menu-bars')
let navBar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navBar.classList.toggle('active')
}
window.onscroll= () =>{
    menu.classList.remove('fa-times')
    navBar.classList.remove('active')
}

//  Given Script ========
// document.querySelector('#search-icon').onclick = () =>{
//     document.querySelector('#search-form').classList.toggle('active')
// }

// document.querySelector('#close').onclick = () =>{
//     document.querySelector('#search-form').classList.remove('active')
// }

// My Custom Script ======

const searchIcon = document.getElementById('search-icon')
const searchFrom = document.getElementById('search-form')
const close = document.getElementById('close')

searchIcon.addEventListener('click', () =>{
    searchFrom.classList.toggle('active')
})

close.addEventListener('click', () =>{
    searchFrom.classList.remove('active')
})


//  Initialize Swipe: 
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

 