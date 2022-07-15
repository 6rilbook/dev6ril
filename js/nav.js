const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const btn1 = document.querySelector('.cont_btn_open_dets')
const btn2 = document.querySelector('.cont_btn_open_dets2')
const btn3 = document.querySelector('.cont_btn_open_dets3')
const btn4 = document.querySelector('.cont_btn_open_dets4')
const btn5 = document.querySelector('.cont_btn_open_dets5')

hamburger.addEventListener('click', ()=>{

    btn1.classList.toggle('kaka');
    btn2.classList.toggle('kaka');
    btn3.classList.toggle('kaka');
    btn4.classList.toggle('kaka');
    btn5.classList.toggle('kaka');

   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });


    
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});