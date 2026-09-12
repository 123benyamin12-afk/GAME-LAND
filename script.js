// انتخاب تمام رنگ‌ها

const colorPickers =
    document.querySelectorAll(".color-picker");


// انتخاب body

const body =
    document.body;


// گرفتن تم ذخیره شده

const savedTheme =
    localStorage.getItem("gameLandTheme");


// اگر قبلاً رنگی انتخاب شده باشد

if (savedTheme) {

    body.className =
        savedTheme;


    colorPickers.forEach(picker => {

        if (
            picker.getAttribute("data-theme")
            === savedTheme
        ) {

            picker.classList.add("active");

        } else {

            picker.classList.remove("active");

        }

    });

}


// تغییر رنگ سایت

colorPickers.forEach(picker => {

    picker.addEventListener("click", () => {


        // حذف انتخاب قبلی

        colorPickers.forEach(p => {

            p.classList.remove("active");

        });


        // فعال کردن رنگ جدید

        picker.classList.add("active");


        // گرفتن نام تم

        const selectedTheme =
            picker.getAttribute("data-theme");


        // تغییر تم

        body.className =
            selectedTheme;


        // ذخیره تم

        localStorage.setItem(
            "gameLandTheme",
            selectedTheme
        );

    });

});
