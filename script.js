// گرفتن عناصر انتخاب تم
const colorPickers = document.querySelectorAll('.color-picker');
const body = document.body;

// بررسی تم ذخیره‌شده از قبل
const savedTheme = localStorage.getItem('gameLandTheme');
if (savedTheme) {
    body.className = savedTheme;
    colorPickers.forEach(picker => {
        if (picker.getAttribute('data-theme') === savedTheme) {
            picker.classList.add('active');
        } else {
            picker.classList.remove('active');
        }
    });
}

// افزودن کلیک روی دکمه‌های تم در کادر پایینی
colorPickers.forEach(picker => {
    picker.addEventListener('click', () => {
        // حذف استایل فعال قبلی
        colorPickers.forEach(p => p.classList.remove('active'));
        
        // فعال‌سازی دکمه جدید
        picker.classList.add('active');
        
        // دریافت نام کلاس تم
        const selectedTheme = picker.getAttribute('data-theme');
        
        // تغییر کلاس اصلی body
        body.className = selectedTheme;
        
        // ذخیره انتخاب کاربر در مرورگر
        localStorage.setItem('gameLandTheme', selectedTheme);
    });
});
