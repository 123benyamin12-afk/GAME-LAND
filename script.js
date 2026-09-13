const themes = document.querySelectorAll(".theme");

const root = document.documentElement;

const themeName = document.getElementById("themeName");

const names = [
    "CYBER BLUE",
    "NEON PURPLE",
    "TOXIC GREEN",
    "INFERNO",
    "ELECTRIC GOLD",
    "AQUA",
    "GALAXY"
];

themes.forEach((theme, index) => {

    theme.addEventListener("click", () => {

        const color1 = theme.dataset.color1;
        const color2 = theme.dataset.color2;

        // تغییر رنگ‌های اصلی سایت
        root.style.setProperty("--color1", color1);
        root.style.setProperty("--color2", color2);

        // حذف active از همه
        themes.forEach(item => {
            item.classList.remove("active");
        });

        // فعال کردن تم انتخاب‌شده
        theme.classList.add("active");

        // تغییر نام تم
        themeName.textContent = names[index];

        // افکت کوتاه
        document.body.animate(
            [
                { opacity: 0.75 },
                { opacity: 1 }
            ],
            {
                duration: 250,
                easing: "ease-out"
            }
        );

    });

});


// دکمه ورود
const mainButton = document.querySelector(".main-button");

mainButton.addEventListener("click", () => {

    mainButton.innerHTML = "🎮 خوش اومدی به گیم لند!";

    setTimeout(() => {
        mainButton.innerHTML = 'ورود به دنیای گیم <span>➜</span>';
    }, 2000);

});
