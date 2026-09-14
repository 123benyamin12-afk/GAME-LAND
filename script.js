// ==========================================
// GAME LAND - OPTIMIZED 3D
// ==========================================

const light = document.querySelector(".cursor-light");


// ===============================
// CURSOR LIGHT
// ===============================

let mouseX = 0;
let mouseY = 0;
let lightX = 0;
let lightY = 0;

document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function moveLight(){

    lightX += (mouseX - lightX) * 0.12;
    lightY += (mouseY - lightY) * 0.12;

    if(light){
        light.style.left = lightX + "px";
        light.style.top = lightY + "px";
    }

    requestAnimationFrame(moveLight);
}

moveLight();


// ===============================
// PARTICLES
// فقط 22 ذره برای عملکرد بهتر
// ===============================

const particleBox = document.querySelector("#particles");

for(let i = 0; i < 22; i++){

    const p = document.createElement("span");

    p.className = "particle";

    p.style.left = Math.random() * 100 + "%";

    p.style.animationDuration =
        (7 + Math.random() * 10) + "s";

    p.style.animationDelay =
        Math.random() * 10 + "s";

    particleBox.appendChild(p);
}


// ===============================
// TYPING
// ===============================

const typing = document.querySelector(".typing");

const words = [
    "WELCOME GAMER 🎮",
    "ENTER GAME LAND",
    "PLAY • WIN • REPEAT"
];

let word = 0;
let letter = 0;
let deleting = false;

function typingEffect(){

    const current = words[word];

    if(!deleting){

        typing.textContent =
            current.substring(0, letter + 1);

        letter++;

        if(letter === current.length){

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    }else{

        typing.textContent =
            current.substring(0, letter - 1);

        letter--;

        if(letter === 0){

            deleting = false;

            word++;

            if(word >= words.length){
                word = 0;
            }
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 55 : 100
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

const modal = document.querySelector("#gameModal");

const cards = document.querySelectorAll(".game-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const data = games[card.dataset.game];

        if(!data) return;

        document.querySelector("#modalIcon").textContent =
            data.icon;

        document.querySelector("#modalTitle").textContent =
            data.title;

        document.querySelector("#modalTag").textContent =
            data.tag;

        document.querySelector("#modalDescription").textContent =
            data.description;

        document.querySelector("#modalGenre").textContent =
            data.genre;

        document.querySelector("#modalRating").textContent =
            data.rating;

        document.querySelector("#modalMode").textContent =
            data.mode;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";
    });
});


function closeModal(){

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


document
    .querySelector(".close-modal")
    .addEventListener("click", closeModal);


modal.addEventListener("click", e => {

    if(e.target === modal){
        closeModal();
    }

});


document.addEventListener("keydown", e => {

    if(e.key === "Escape"){
        closeModal();
    }

});


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
    document.querySelectorAll(".theme-color");

const themeName =
    document.querySelector("#themeName");


function changeTheme(name){

    const theme = themes[name];

    if(!theme) return;

    document.documentElement.style
        .setProperty("--primary", theme.primary);

    document.documentElement.style
        .setProperty("--secondary", theme.secondary);

    themeName.textContent = theme.name;

    themeButtons.forEach(btn => {
        btn.classList.remove("active");
    });

    const selected =
        document.querySelector(
            `[data-theme="${name}"]`
        );

    if(selected){
        selected.classList.add("active");
    }

    localStorage.setItem(
        "GAME_LAND_THEME",
        name
    );
}


themeButtons.forEach(button => {

    button.addEventListener("click", () => {

        changeTheme(
            button.dataset.theme
        );

    });

});


const savedTheme =
    localStorage.getItem("GAME_LAND_THEME");

changeTheme(savedTheme || "cyan");


// ===============================
// 3D GAME CARDS
// بهینه‌شده با requestAnimationFrame
// ===============================

cards.forEach(card => {

    let frame = null;

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        targetY =
            ((x / rect.width) - 0.5) * 9;

        targetX =
            ((y / rect.height) - 0.5) * -9;

        if(!frame){
            frame = requestAnimationFrame(update3D);
        }

    });

    function update3D(){

        currentX +=
            (targetX - currentX) * 0.18;

        currentY +=
            (targetY - currentY) * 0.18;

        card.style.transform =
            `perspective(900px)
             rotateX(${currentX}deg)
             rotateY(${currentY}deg)
             translateY(-6px)`;

        if(
            Math.abs(targetX - currentX) > 0.05 ||
            Math.abs(targetY - currentY) > 0.05
        ){

            frame =
                requestAnimationFrame(update3D);

        }else{

            frame = null;
        }
    }

    card.addEventListener("mouseleave", () => {

        targetX = 0;
        targetY = 0;

        if(!frame){
            frame =
                requestAnimationFrame(update3D);
        }

    });

});


// ===============================
// PREVENT BUTTON FROM OPENING CARD
// ===============================

document
    .querySelectorAll(".game-more")
    .forEach(button => {

        button.addEventListener("click", e => {

            e.stopPropagation();

        });

    });


// ===============================
// MOBILE PERFORMANCE
// ===============================

// روی موبایل 3D کارت‌ها همچنان فعال هستند.
// اما حرکت آن‌ها فقط با لمس انجام نمی‌شود
// تا هنگام اسکرول فشار اضافه ایجاد نشود.

if(window.matchMedia("(max-width:800px)").matches){

    cards.forEach(card => {

        card.addEventListener("touchstart", () => {

            card.style.transform =
                "perspective(900px) rotateX(2deg) rotateY(-2deg) translateY(-4px)";

        }, {passive:true});

        card.addEventListener("touchend", () => {

            setTimeout(() => {
                card.style.transform = "";
            }, 180);

        }, {passive:true});

    });

            }
