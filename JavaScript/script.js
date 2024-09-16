let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let naLinks = document.querySelectorAll('.nav-link');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            
        }
    }
