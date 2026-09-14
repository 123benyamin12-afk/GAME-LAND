/* =========================================
   GAME LAND
   Main JavaScript
========================================= */


/* ================= THEMES ================= */

const themes = document.querySelectorAll(".theme");

const root = document.documentElement;

const themeName = document.getElementById("themeName");


themes.forEach((theme) => {

    theme.addEventListener("click", () => {

        const colorA = theme.dataset.a;
        const colorB = theme.dataset.b;
        const name = theme.dataset.name;


        // تغییر رنگ اصلی
        root.style.setProperty("--a", colorA);
        root.style.setProperty("--b", colorB);


        // تغییر Active
        themes.forEach(item => {
            item.classList.remove("active");
        });

        theme.classList.add("active");


        // اسم تم
        themeName.textContent = name;


        // افکت تغییر تم
        document.body.animate(
            [
                {
                    opacity: .65,
                    filter: "brightness(.7)"
                },
                {
                    opacity: 1,
                    filter: "brightness(1)"
                }
            ],
            {
                duration: 300,
                easing: "ease-out"
            }
        );

    });

});


/* ================= EXPLORE BUTTON ================= */

const exploreBtn =
    document.getElementById("exploreBtn");

const gamesSection =
    document.getElementById("games");


exploreBtn.addEventListener("click", () => {

    gamesSection.scrollIntoView({
        behavior: "smooth"
    });

});


/* ================= GAME DATA ================= */

const gameData = {

    minecraft: {

        icon: "⛏️",

        english: "MINECRAFT",

        title: "ماینکرافت",

        type: "SURVIVAL",

        description:
        "ماینکرافت یک دنیای بزرگ و آزاد است که می‌توانی در آن بسازی، ماجراجویی کنی، منابع جمع‌آوری کنی و در دنیای خلاقانه خودت بازی کنی."

    },


    cod: {

        icon: "🔫",

        english: "CALL OF DUTY",

        title: "کالاف دیوتی",

        type: "ACTION",

        description:
        "کالاف دیوتی یک بازی اکشن و رقابتی است که در آن بازیکنان در حالت‌های مختلف با یکدیگر رقابت می‌کنند و برای پیروزی تلاش می‌کنند."

    },


    clash: {

        icon: "⚔️",

        english: "CLASH",

        title: "کلش",

        type: "STRATEGY",

        description:
        "در کلش می‌توانی دهکده خودت را بسازی، نیروهایت را ارتقا بدهی، استراتژی بچینی و با دیگر بازیکنان برای پیروزی رقابت کنی."

    },


    pubg: {

        icon: "🪂",

        english: "PUBG MOBILE",

        title: "پابجی",

        type: "BATTLE ROYALE",

        description:
        "پابجی موبایل یک تجربه بتل‌رویال رقابتی است که در آن باید با تصمیم‌گیری و همکاری مناسب تلاش کنی تا در پایان مسابقه پیروز شوی."

    }

};


/* ================= MODAL ================= */

const modal =
    document.getElementById("gameModal");

const closeModal =
    document.getElementById("closeModal");

const modalIcon =
    document.getElementById("modalIcon");

const modalEnglish =
    document.getElementById("modalEnglish");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalType =
    document.getElementById("modalType");


/* تمام کارت‌های بازی */

const gameCards =
    document.querySelectorAll(".game-card");


gameCards.forEach((card) => {

    card.addEventListener("click", () => {

        const game =
            card.dataset.game;

        const data =
            gameData[game];


        if (!data) return;


        modalIcon.textContent =
            data.icon;

        modalEnglish.textContent =
            data.english;

        modalTitle.textContent =
            data.title;

        modalDescription.textContent =
            data.description;

        modalType.textContent =
            data.type;


        modal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    });

});


/* بستن */

closeModal.addEventListener("click", closeGameModal);


function closeGameModal() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}


/* کلیک بیرون پنجره */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeGameModal();

    }

});


/* کلید ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeGameModal();

    }

});


/* ================= CARD TILT ================= */

gameCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 800) return;


        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const rotateX =
            ((y / rect.height) - .5) * -5;

        const rotateY =
            ((x / rect.width) - .5) * 5;


        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ================= CONSOLE ================= */

console.log(
    "%c🎮 GAME LAND SYSTEM ONLINE",
    "color:#00eaff;font-size:18px;font-weight:bold;"
);
