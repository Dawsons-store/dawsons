const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7);

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

if (days && hours && minutes && seconds) {

    setInterval(() => {

        const now = new Date();
        const diff = targetDate - now;

        days.innerHTML = Math.floor(diff / 1000 / 60 / 60 / 24);
        hours.innerHTML = Math.floor(diff / 1000 / 60 / 60) % 24;
        minutes.innerHTML = Math.floor(diff / 1000 / 60) % 60;
        seconds.innerHTML = Math.floor(diff / 1000) % 60;

    }, 1000);

}
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
//================ HERO BACKGROUND SLIDER ================

const hero = document.querySelector(".hero");

if(hero){

const heroImages = [

"images/hero/hero1.jpg",
"images/hero/hero2.jpg",
"images/hero/hero3.jpg",
"images/hero/hero4.jpg"

];

let current = 0;

setInterval(function(){

current++;

if(current >= heroImages.length){

current = 0;

}

hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('${heroImages[current]}')`;

}, 4000);

}
// ================ MOBILE MENU ================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}