// ==========================================
// GAME LAND PRO SCRIPT
// ==========================================


// ===============================
// CURSOR LIGHT
// ===============================

const cursorLight =
document.querySelector(".cursor-light");


document.addEventListener("mousemove",(e)=>{

    cursorLight.style.left =
    e.clientX + "px";

    cursorLight.style.top =
    e.clientY + "px";

});



// ===============================
// PARTICLES
// ===============================

const particleContainer =
document.querySelector("#particles");


for(let i=0;i<90;i++){

    const particle =
    document.createElement("span");

    particle.className="particle";

    particle.style.left =
    Math.random()*100+"%";

    particle.style.animationDuration =
    (5+Math.random()*12)+"s";

    particle.style.animationDelay =
    Math.random()*10+"s";

    particle.style.width =
    (1+Math.random()*4)+"px";

    particle.style.height =
    particle.style.width;

    particleContainer.appendChild(
        particle
    );

}



// ===============================
// TYPING EFFECT
// ===============================

const typing =
document.querySelector(".typing");


const words = [

    "WELCOME GAMER 🎮",

    "ENTER GAME LAND",

    "LEVEL UP YOUR WORLD",

    "PLAY • WIN • REPEAT"

];


let wordIndex=0;
let charIndex=0;
let deleting=false;


function typeEffect(){

    const word =
    words[wordIndex];


    if(!deleting){

        typing.textContent =
        word.substring(
            0,
            charIndex+1
        );

        charIndex++;


        if(charIndex === word.length){

            deleting=true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    }else{

        typing.textContent =
        word.substring(
            0,
            charIndex-1
        );

        charIndex--;


        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}


typeEffect();



// ===============================
// 3D GAME CARDS
// ===============================

document
.querySelectorAll(".game-card")
.forEach(card=>{

    card.addEventListener(
        "mousemove",
        (e)=>{

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const rotateY =
            ((x / rect.width)-.5)*12;

            const rotateX =
            ((y / rect.height)-.5)*-12;


            card.style.transform =
            `
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            scale(1.02)
            `;

        }
    );


    card.addEventListener(
        "mouseleave",
        ()=>{

            card.style.transform="";

        }
    );

});



// ===============================
// GAME DATA
// ===============================

const games = {

    minecraft:{

        title:"Minecraft",

        icon:"⛏️",

        tag:"ADVENTURE",

        description:
        "یک دنیای بزرگ و آزاد که در آن می‌توانی ساخت‌وساز کنی، منابع جمع کنی، به ماجراجویی بروی و دنیای خودت را بسازی.",

        genre:"Adventure",

        rating:"9.5/10",

        mode:"Solo / Multiplayer"

    },


    cod:{

        title:"Call of Duty",

        icon:"🔫",

        tag:"ACTION",

        description:
        "یک مجموعه اکشن و تیراندازی سریع با حالت‌های مختلف که روی رقابت، تاکتیک و مبارزه تمرکز دارد.",

        genre:"Action",

        rating:"9.1/10",

        mode:"Multiplayer"

    },


    gta:{

        title:"GTA V",

        icon:"🚘",

        tag:"OPEN WORLD",

        description:
        "یک دنیای آزاد بزرگ با شهر، مأموریت‌ها، وسایل نقلیه و فعالیت‌های مختلف که می‌توانی در آن به گشت‌وگذار بپردازی.",

        genre:"Open World",

        rating:"9.3/10",

        mode:"Single / Online"

    },


    fortnite:{

        title:"Fortnite",

        icon:"🏆",

        tag:"BATTLE ROYALE",

        description:
        "یک بازی رقابتی که در آن بازیکنان برای زنده ماندن و رسیدن به پیروزی با یکدیگر رقابت می‌کنند.",

        genre:"Battle Royale",

        rating:"9.0/10",

        mode:"Online"

    }

};



// ===============================
// GAME MODAL
// ===============================

const modal =
document.querySelector("#gameModal");


const modalTitle =
document.querySelector("#modalTitle");


const modalIcon =
document.querySelector("#modalIcon");


const modalTag =
document.querySelector("#modalTag");


const modalDescription =
document.querySelector("#modalDescription");


const modalGenre =
document.querySelector("#modalGenre");


const modalRating =
document.querySelector("#modalRating");


const modalMode =
document.querySelector("#modalMode");


document
.querySelectorAll(".game-card")
.forEach(card=>{

    card.addEventListener(
        "click",
        ()=>{

            const id =
            card.dataset.game;

            const game =
            games[id];

            if(!game) return;


            modalTitle.textContent =
            game.title;

            modalIcon.textContent =
            game.icon;

            modalTag.textContent =
            game.tag;

            modalDescription.textContent =
            game.description;

            modalGenre.textContent =
            game.genre;

            modalRating.textContent =
            game.rating;

            modalMode.textContent =
            game.mode;


            modal.classList.add(
                "active"
            );


            document.body.style.overflow=
            "hidden";

        }
    );

});



// ===============================
// CLOSE MODAL
// ===============================

document
.querySelector(".close-modal")
.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    (e)=>{

        if(e.target===modal){

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    (e)=>{

        if(e.key==="Escape"){

            closeModal();

        }

    }
);


function closeModal(){

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow="";

}



// ===============================
// THEME SYSTEM
// ===============================

const themes = {

    cyan:{

        primary:"#00f7ff",
        secondary:"#7c00ff",
        accent:"#ff00aa",
        name:"Cyan"

    },


    purple:{

        primary:"#a855f7",
        secondary:"#5b21b6",
        accent:"#ec4899",
        name:"Purple"

    },


    pink:{

        primary:"#ff00aa",
        secondary:"#ff006e",
        accent:"#8b00ff",
        name:"Pink"

    },


    red:{

        primary:"#ff1744",
        secondary:"#b00020",
        accent:"#ff6d00",
        name:"Red"

    },


    green:{

        primary:"#00ff73",
        secondary:"#00a854",
        accent:"#b6ff00",
        name:"Green"

    },


    blue:{

        primary:"#2878ff",
        secondary:"#0047ab",
        accent:"#00d9ff",
        name:"Blue"

    },


    orange:{

        primary:"#ff7a00",
        secondary:"#ff3d00",
        accent:"#ffd000",
        name:"Orange"

    }

};


const themeButtons =
document.querySelectorAll(
    ".theme-color"
);


const themeName =
document.querySelector(
    "#themeName"
);



function setTheme(theme){

    const selected =
    themes[theme];

    if(!selected) return;


    document.documentElement
    .style
    .setProperty(
        "--primary",
        selected.primary
    );


    document.documentElement
    .style
    .setProperty(
        "--secondary",
        selected.secondary
    );


    document.documentElement
    .style
    .setProperty(
        "--accent",
        selected.accent
    );


    themeName.textContent =
    selected.name;


    themeButtons
    .forEach(button=>{

        button.classList.remove(
            "active"
        );

    });


    const active =
    document.querySelector(
        `[data-theme="${theme}"]`
    );


    if(active){

        active.classList.add(
            "active"
        );

    }


    localStorage.setItem(
        "gameLandTheme",
        theme
    );

}



// انتخاب رنگ

themeButtons.forEach(
    button=>{

        button.addEventListener(
            "click",
            ()=>{

                setTheme(
                    button.dataset.theme
                );

                clickEffect(
                    event
                );

            }
        );

    }
);



// رنگ ذخیره‌شده

const savedTheme =
localStorage.getItem(
    "gameLandTheme"
);


if(savedTheme){

    setTheme(
        savedTheme
    );

}else{

    setTheme("cyan");

}



// ===============================
// COUNTERS
// ===============================

const counters =
document.querySelectorAll(
    ".counter"
);


const counterObserver =
new IntersectionObserver(
    entries=>{

        entries.forEach(entry=>{

            if(
                !entry.isIntersecting
            ) return;


            const counter =
            entry.target;

            const target =
            Number(
                counter.dataset.target
            );


            let current=0;

            const duration=1600;

            const start =
            performance.now();


            function update(time){

                const progress =
                Math.min(
                    (time-start)/
                    duration,
                    1
                );


                const eased =
                1-Math.pow(
                    1-progress,
                    3
                );


                current =
                Math.floor(
                    eased*target
                );


                counter.textContent =
                current.toLocaleString(
                    "en-US"
                )+"+";


                if(progress<1){

                    requestAnimationFrame(
                        update
                    );

                }

            }


            requestAnimationFrame(
                update
            );


            counterObserver.unobserve(
                counter
            );

        });

    },
    {
        threshold:.5
    }
);


counters.forEach(
    counter=>
    counterObserver.observe(counter)
);



// ===============================
// CLICK RIPPLE
// ===============================

document.addEventListener(
    "click",
    (e)=>{

        clickEffect(e);

    }
);


function clickEffect(e){

    const ripple =
    document.createElement(
        "span"
    );


    ripple.style.position=
    "fixed";

    ripple.style.left=
    e.clientX+"px";

    ripple.style.top=
    e.clientY+"px";

    ripple.style.width=
    "20px";

    ripple.style.height=
    "20px";

    ripple.style.border=
    "2px solid var(--primary)";

    ripple.style.borderRadius=
    "50%";

    ripple.style.pointerEvents=
    "none";

    ripple.style.zIndex=
    "9999";

    ripple.style.transform=
    "translate(-50%,-50%)";

    ripple.style.animation=
    "ripple .7s ease-out";


    document.body.appendChild(
        ripple
    );


    setTimeout(
        ()=>{
            ripple.remove();
        },
        700
    );

}



// ===============================
// RIPPLE CSS
// ===============================

const style =
document.createElement("style");


style.textContent=`

@keyframes ripple{

    0%{

        width:20px;
        height:20px;

        opacity:1;

    }

    100%{

        width:120px;
        height:120px;

        opacity:0;

    }

}

`;


document.head.appendChild(
    style
);



// ===============================
// REVEAL ON SCROLL
// ===============================

const revealElements =
document.querySelectorAll(
    ".game-card, .feature, .stat-card, .news-card"
);


const revealObserver =
new IntersectionObserver(
    entries=>{

        entries.forEach(
            entry=>{

                if(
                    entry.isIntersecting
                ){

                    entry.target.style.opacity=
                    "1";

                    entry.target.style.transform=
                    "translateY(0)";

                }

            }
        );

    },
    {
        threshold:.12
    }
);


revealElements.forEach(
    element=>{

        element.style.opacity="0";

        element.style.transform=
        "translateY(35px)";

        element.style.transition=
        "opacity .7s ease, transform .7s ease";

        revealObserver.observe(
            element
        );

    }
);



// ===============================
// BUTTON GLOW
// ===============================

document
.querySelectorAll(
    ".main-btn, .second-btn, .game-more"
)
.forEach(button=>{

    button.addEventListener(
        "mouseenter",
        ()=>{

            button.style.boxShadow=
            "0 0 30px var(--primary)";

        }
    );


    button.addEventListener(
        "mouseleave",
        ()=>{

            button.style.boxShadow="";

        }
    );

});



// ===============================
// MOBILE TOUCH EFFECT
// ===============================

document
.querySelectorAll(".game-card")
.forEach(card=>{

    card.addEventListener(
        "touchstart",
        ()=>{

            card.style.transform=
            "scale(.97)";

        }
    );


    card.addEventListener(
        "touchend",
        ()=>{

            card.style.transform="";

        }
    );

});



// ===============================
// CONSOLE
// ===============================

console.log(
    "%c🎮 GAME LAND",
    "color:#00f7ff;font-size:30px;font-weight:bold"
);

console.log(
    "%cGaming system loaded!",
    "color:#ff00aa;font-size:16px"
);
