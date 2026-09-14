const root = document.documentElement;

const colors = document.querySelectorAll(".color");

colors.forEach(color => {

    color.addEventListener("click", () => {

        const main = color.dataset.main;
        const second = color.dataset.second;

        root.style.setProperty("--main", main);
        root.style.setProperty("--second", second);

        colors.forEach(c => c.classList.remove("active"));

        color.classList.add("active");

    });

});


/* رفتن به بازی‌ها */

function goGames() {
    document.getElementById("games").scrollIntoView({
        behavior: "smooth"
    });
}


/* باز کردن اطلاعات بازی */

function openGame(title, text) {

    document.getElementById("modalTitle").textContent = title;

    document.getElementById("modalText").textContent = text;

    document.getElementById("modal").classList.add("show");

}


/* بستن */

function closeGame() {

    document.getElementById("modal").classList.remove("show");

}


/* بستن با کلیک بیرون */

document.getElementById("modal").addEventListener("click", function(e) {

    if (e.target === this) {
        closeGame();
    }

});


/* بستن با ESC */

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        closeGame();
    }

});
