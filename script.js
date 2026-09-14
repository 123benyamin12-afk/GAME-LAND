/* =========================
   THEME COLORS
========================= */

const root = document.documentElement;

const themes = document.querySelectorAll(".theme");

const selectedColor =
    document.getElementById("selectedColor");


themes.forEach(theme => {

    theme.addEventListener("click", () => {

        const main =
            theme.getAttribute("data-main");

        const second =
            theme.getAttribute("data-second");

        const name =
            theme.getAttribute("data-name");


        root.style.setProperty(
            "--main",
            main
        );

        root.style.setProperty(
            "--second",
            second
        );


        themes.forEach(item => {

            item.classList.remove("active");

        });


        theme.classList.add("active");


        selectedColor.textContent = name;

    });

});



/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


const menuLinks =
    document.querySelectorAll(".mobile-menu a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});



/* =========================
   START BUTTON
========================= */

function scrollToGames() {

    const games =
        document.getElementById("games");

    games.scrollIntoView({
        behavior: "smooth"
    });

}



/* =========================
   GAME MODAL
========================= */

const modal =
    document.getElementById("gameModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");


function openGame(title, text) {

    modalTitle.textContent = title;

    modalText.textContent = text;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeGame() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}



/* کلیک بیرون پنجره */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeGame();

    }

});



/* دکمه ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeGame();

    }

});
