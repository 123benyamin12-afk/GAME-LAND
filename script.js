// ================================
// GAME LAND - PRO GAMING EFFECTS
// ================================


// نور دنبال کننده موس

const light = document.querySelector(".cursor-light");

document.addEventListener("mousemove",(e)=>{

    light.style.left =
    e.clientX - 125 + "px";

    light.style.top =
    e.clientY - 125 + "px";

});




// ================================
// ساخت ذرات متحرک
// ================================

for(let i=0;i<100;i++){

    let particle =
    document.createElement("div");

    particle.className="particle";

    particle.style.left =
    Math.random()*100+"vw";

    particle.style.top =
    Math.random()*100+"vh";


    particle.style.animationDuration =
    (5+Math.random()*10)+"s";


    particle.style.opacity =
    Math.random();


    document.body.appendChild(particle);

}






// ================================
// تایپ حرفه‌ای عنوان
// ================================


const title =
document.querySelector(".typing");


const words=[

"WELCOME GAMER 🎮",

"ENTER THE DIGITAL WORLD",

"GAME LAND"

];


let wordIndex=0;
let charIndex=0;


function type(){

if(charIndex < words[wordIndex].length){

title.innerHTML +=
words[wordIndex][charIndex];

charIndex++;

setTimeout(type,100);

}

else{

setTimeout(()=>{

title.innerHTML="";

charIndex=0;

wordIndex++;

if(wordIndex>=words.length)
wordIndex=0;


type();


},1500);

}

}


type();






// ================================
// حرکت سه بعدی کارت‌ها
// ================================


const cards =
document.querySelectorAll(".card");


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


let x =
e.offsetX;


let y =
e.offsetY;


let rotateY =
(x-card.offsetWidth/2)/15;


let rotateX =
(y-card.offsetHeight/2)/-15;



card.style.transform =
`
perspective(600px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.08)
`;

});



card.addEventListener("mouseleave",()=>{


card.style.transform =
"";


});


});







// ================================
// انیمیشن اسکرول
// ================================


const hidden =
document.querySelectorAll(".hidden");


const observer =
new IntersectionObserver((items)=>{


items.forEach(item=>{


if(item.isIntersecting){

item.target.classList.add("show");

}


});


});



hidden.forEach(el=>{

observer.observe(el);

});







// ================================
// شمارنده حرفه‌ای
// ================================


const counters =
document.querySelectorAll(".counter");


counters.forEach(counter=>{


let target =
Math.floor(Math.random()*9000)+1000;


let value=0;


let speed =
target/100;



let timer =
setInterval(()=>{


value+=speed;


counter.innerHTML =
Math.floor(value)+"+";



if(value>=target){

counter.innerHTML =
target+"+";


clearInterval(timer);

}



},30);



});







// ================================
// افکت کلیک گیمینگ
// ================================


document.addEventListener("click",(e)=>{


let circle =
document.createElement("span");


circle.style.position="fixed";

circle.style.left=e.clientX+"px";

circle.style.top=e.clientY+"px";

circle.style.width="20px";

circle.style.height="20px";

circle.style.borderRadius="50%";

circle.style.border="2px solid cyan";

circle.style.pointerEvents="none";

circle.style.animation=
"clickEffect .6s";


document.body.appendChild(circle);



setTimeout(()=>{

circle.remove();

},600);


});








// ================================
// دکمه‌های نئونی
// ================================


document.querySelectorAll("button")
.forEach(btn=>{


btn.addEventListener("mouseenter",()=>{


btn.style.boxShadow=
"0 0 40px #ff00aa";


});



btn.addEventListener("mouseleave",()=>{


btn.style.boxShadow="";


});


});







// ================================
// حرکت آرام پس زمینه
// ================================


let angle=0;


function backgroundMove(){


angle+=0.2;


document.body.style.backgroundPosition =
angle+"px "+angle+"px";



requestAnimationFrame(backgroundMove);


}


backgroundMove();






// ================================
// افکت ورود سایت
// ================================


window.onload=()=>{


document.body.style.opacity="1";


};
