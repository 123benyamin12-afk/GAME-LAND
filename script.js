/* =====================================================
   GAME LAND
   LIGHTWEIGHT JAVASCRIPT
===================================================== */


/* ================= GAME DATA ================= */

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


/* ================= MODAL ================= */

const modal =
    document.getElementById("gameModal");

const closeModalButton =
    document.getElementById("closeModal");

const cards =
    document.querySelectorAll(".game-card");


function openGame(gameName){

    const game = games[gameName];

    if(!game){
        return;
    }

    document.getElementById("modalIcon")
        .textContent = game.icon;

    document.getElementById("modalTitle")
        .textContent = game.title;

    document.getElementById("modalTag")
        .textContent = game.tag;

    document.getElementById("modalDescription")
        .textContent = game.description;

    document.getElementById("modalGenre")
        .textContent = game.genre;

    document.getElementById("modalRating")
        .textContent = game.rating;

    document.getElementById("modalMode")
        .textContent = game.mode;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeGame(){

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


cards.forEach(card => {

    card.addEventListener("click", () => {

        openGame(card.dataset.game);

    });

});


closeModalButton.addEventListener(
    "click",
    closeGame
);


modal.addEventListener("click", event => {

    if(event.target === modal){

        closeGame();

    }

});


document.addEventListener("keydown", event => {

    if(event.key === "Escape"){

        closeGame();

    }

});


/* ================= 3D CARDS ================= */

/*
   روی کامپیوتر:
   کارت‌ها با حرکت موس سه‌بعدی می‌شوند.

   روی موبایل:
   این افکت خاموش است تا هنگام اسکرول
   باعث لگ نشود.
*/

const desktop =
    window.matchMedia("(min-width:801px)").matches;


if(desktop){

    cards.forEach(card => {

        let animationFrame = null;

        let targetX = 0;
        let targetY = 0;

        let currentX = 0;
        let currentY = 0;


        function animateCard(){

            currentX +=
                (targetX - currentX) * 0.15;

            currentY +=
                (targetY - currentY) * 0.15;


            card.style.transform =
                `
                perspective(800px)
                rotateX(${currentY}deg)
                rotateY(${targetX}deg)
                translateY(-5px)
                `;


            if(
                Math.abs(targetX-currentX) > 0.05 ||
                Math.abs(targetY-currentY) > 0.05
            ){

                animationFrame =
                    requestAnimationFrame(
                        animateCard
                    );

            }else{

                animationFrame = null;

            }

        }


        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                targetX =
                    ((x / rect.width) - 0.5) * 8;

                targetY =
                    ((y / rect.height) - 0.5) * -8;


                if(!animationFrame){

                    animationFrame =
                        requestAnimationFrame(
                            animateCard
                        );

                }

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                targetX = 0;
                targetY = 0;


                if(!animationFrame){

                    animationFrame =
                        requestAnimationFrame(
                            animateCard
                        );

                }

            }
        );

    });

}


/* ================= THEMES ================= */

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
    document.querySelectorAll(".theme");

const themeName =
    document.getElementById("themeName");


function setTheme(name){

    const theme =
        themes[name];

    if(!theme){
        return;
    }


    document.documentElement.style
        .setProperty(
            "--primary",
            theme.primary
        );


    document.documentElement.style
        .setProperty(
            "--secondary",
            theme.secondary
        );


    themeName.textContent =
        theme.name;


    themeButtons.forEach(button => {

        button.classList.remove("active");

    });


    const activeButton =
        document.querySelector(
            `.theme[data-theme="${name}"]`
        );


    if(activeButton){

        activeButton.classList.add("active");

    }


    try{

        localStorage.setItem(
            "GAME_LAND_THEME",
            name
        );

    }catch(error){

        // اگر localStorage در مرورگر در دسترس نبود
        // سایت همچنان کار می‌کند.

    }

}


/* ================= THEME CLICK ================= */

themeButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            setTheme(
                button.dataset.theme
            );

        }
    );

});


/* ================= LOAD THEME ================= */

let savedTheme = null;

try{

    savedTheme =
        localStorage.getItem(
            "GAME_LAND_THEME"
        );

}catch(error){

    savedTheme = null;

}


setTheme(
    savedTheme || "cyan"
);


/* ================= BUTTON FIX ================= */

/*
   جلوگیری از این‌که کلیک روی دکمه
   دوبار روی کارت اجرا شود.
*/

document
    .querySelectorAll(".more")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

            }
        );

    });
