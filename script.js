// ==========================================
// GAME LAND
// ==========================================


// ===============================
// CURSOR
// ===============================

const light =
document.querySelector(".cursor-light");


document.addEventListener(
    "mousemove",
    function(e){

        light.style.left =
        e.clientX + "px";

        light.style.top =
        e.clientY + "px";

    }
);



// ===============================
// PARTICLES
// ===============================

const particleBox =
document.querySelector("#particles");


for(let i=0;i<80;i++){

    const p =
    document.createElement("span");

    p.className =
    "particle";

    p.style.left =
    Math.random()*100+"%";

    p.style.animationDuration =
    (5+Math.random()*12)+"s";

    p.style.animationDelay =
    Math.random()*10+"s";

    particleBox.appendChild(p);

}



// ===============================
// TYPING
// ===============================

const typing =
document.querySelector(".typing");


const words = [

    "WELCOME GAMER 🎮",
    "ENTER GAME LAND",
    "PLAY • WIN • REPEAT"

];


let word=0;
let letter=0;
let deleting=false;


function typingEffect(){

    const current =
    words[word];


    if(!deleting){

        typing.textContent =
        current.substring(
            0,
            letter+1
        );

        letter++;


        if(letter===current.length){

            deleting=true;

            setTimeout(
                typingEffect,
                1500
            );

            return;

        }

    }

    else{

        typing.textContent =
        current.substring(
            0,
            letter-1
        );

        letter--;


        if(letter===0){

            deleting=false;

            word++;

            if(word>=words.length)
                word=0;

        }

    }


    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );

}


typingEffect();



// ===============================
// GAME DATA
// ===============================

const games = {

    minecraft:{

        title:"Minecraft",

        icon:"⛏️",

        tag:"ADVENTURE",

        description:
        "در Minecraft می‌توانی دنیای خودت را بسازی، منابع جمع کنی و به ماجراجویی بروی.",

        genre:"Adventure",

        rating:"9.5/10",

        mode:"Solo / Multiplayer"

    },


    cod:{

        title:"Call of Duty",

        icon:"🔫",

        tag:"ACTION",

        description:
        "یک بازی اکشن و رقابتی با نبردهای سریع و حالت‌های مختلف بازی.",

        genre:"Action",

        rating:"9.1/10",

        mode:"Multiplayer"

    },


    gta:{

        title:"GTA V",

        icon:"🚘",

        tag:"OPEN WORLD",

        description:
        "یک دنیای آزاد بزرگ با شهر، مأموریت‌ها، وسایل نقلیه و فعالیت‌های مختلف.",

        genre:"Open World",

        rating:"9.3/10",

        mode:"Single / Online"

    },


    fortnite:{

        title:"Fortnite",

        icon:"🏆",

        tag:"BATTLE ROYALE",

        description:
        "یک بازی رقابتی آنلاین که بازیکنان برای رسیدن به پیروزی با یکدیگر رقابت می‌کنند.",

        genre:"Battle Royale",

        rating:"9.0/10",

        mode:"Online"

    }

};



// ===============================
// MODAL
// ===============================

const modal =
document.querySelector("#gameModal");


document
.querySelectorAll(".game-card")
.forEach(card=>{

    card.addEventListener(
        "click",
        function(){

            const data =
            games[
                card.dataset.game
            ];


            document
            .querySelector("#modalIcon")
            .textContent =
            data.icon;


            document
            .querySelector("#modalTitle")
            .textContent =
            data.title;


            document
            .querySelector("#modalTag")
            .textContent =
            data.tag;


            document
            .querySelector("#modalDescription")
            .textContent =
            data.description;


            document
            .querySelector("#modalGenre")
            .textContent =
            data.genre;


            document
            .querySelector("#modalRating")
            .textContent =
            data.rating;


            document
            .querySelector("#modalMode")
            .textContent =
            data.mode;


            modal.classList.add(
                "active"
            );

            document.body.style.overflow=
            "hidden";

        }
    );

});



function closeModal(){

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow=
    "";

}


document
.querySelector(".close-modal")
.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    function(e){

        if(e.target===modal){

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    function(e){

        if(e.key==="Escape"){

            closeModal();

        }

    }
);



// ===============================
// THEMES
// ===============================

const themes = {

    cyan:{
        primary:"#00f7ff",
        secondary:"#7c00ff",
        name:"CYAN"
    },

    purple:{
        primary:"#a100ff",
        secondary:"#5200ff",
        name:"PURPLE"
    },

    pink:{
        primary:"#ff008c",
        secondary:"#ff00d4",
        name:"PINK"
    },

    green:{
        primary:"#00ff73",
        secondary:"#00c853",
        name:"GREEN"
    },

    red:{
        primary:"#ff1744",
        secondary:"#b00020",
        name:"RED"
    },

    orange:{
        primary:"#ff7a00",
        secondary:"#ff3d00",
        name:"ORANGE"
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


function changeTheme(name){

    const theme =
    themes[name];

    if(!theme)
        return;


    document.documentElement
    .style
    .setProperty(
        "--primary",
        theme.primary
    );


    document.documentElement
    .style
    .setProperty(
        "--secondary",
        theme.secondary
    );


    themeName.textContent =
    theme.name;


    themeButtons
    .forEach(btn=>{

        btn.classList.remove(
            "active"
        );

    });


    const selected =
    document.querySelector(
        `[data-theme="${name}"]`
    );


    if(selected){

        selected.classList.add(
            "active"
        );

    }


    localStorage.setItem(
        "GAME_LAND_THEME",
        name
    );

}



// ===============================
// COLOR BUTTON CLICK
// ===============================

themeButtons
.forEach(button=>{

    button.addEventListener(
        "click",
        function(e){

            changeTheme(
                button.dataset.theme
            );


            ripple(
                e.clientX,
                e.clientY
            );

        }
    );

});



// ===============================
// LOAD SAVED THEME
// ===============================

const saved =
localStorage.getItem(
    "GAME_LAND_THEME"
);


changeTheme(
    saved || "cyan"
);



// ===============================
// CLICK RIPPLE
// ===============================

function ripple(x,y){

    const r =
    document.createElement("span");


    r.style.position=
    "fixed";

    r.style.left=
    x+"px";

    r.style.top=
    y+"px";

    r.style.width=
    "20px";

    r.style.height=
    "20px";

    r.style.border=
    "2px solid var(--primary)";

    r.style.borderRadius=
    "50%";

    r.style.pointerEvents=
    "none";

    r.style.zIndex=
    "9999";

    r.style.transform=
    "translate(-50%,-50%)";

    r.style.animation=
    "ripple .7s ease-out";


    document.body.appendChild(r);


    setTimeout(
        ()=>r.remove(),
        700
    );

}



// ===============================
// ADD RIPPLE CSS
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

        width:130px;
        height:130px;

        opacity:0;

    }

}

`;


document.head.appendChild(style);



// ===============================
// 3D GAME CARDS
// ===============================

document
.querySelectorAll(".game-card")
.forEach(card=>{

    card.addEventListener(
        "mousemove",
        function(e){

            const rect =
            card.getBoundingClientRect();


            const x =
            e.clientX -
            rect.left;


            const y =
            e.clientY -
            rect.top;


            const rotateY =
            ((x/rect.width)-.5)*10;


            const rotateX =
            ((y/rect.height)-.5)*-10;


            card.style.transform=
            `
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            `;

        }
    );


    card.addEventListener(
        "mouseleave",
        function(){

            card.style.transform="";

        }
    );

});



// ===============================
// BUTTON RIPPLE
// ===============================

document
.querySelectorAll(
    ".main-btn,.second-btn,.game-more"
)
.forEach(button=>{

    button.addEventListener(
        "click",
        function(e){

            ripple(
                e.clientX,
                e.clientY
            );

        }
    );

});
