// گرفتن تمام دکمه‌های انتخاب رنگ
const colorBtns = document.querySelectorAll('.color-btn');

// بررسی وجود رنگ ذخیره‌شده در مرورگر کاربر
const savedColor = localStorage.getItem('selectedColor');
if (savedColor) {
    document.documentElement.style.setProperty('--primary-color', savedColor);
    colorBtns.forEach(btn => {
        if (btn.getAttribute('data-color') === savedColor) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// اضافه کردن رویداد کلیک به هر دکمه رنگ
colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // برداشتن کلاس active از بقیه
        colorBtns.forEach(b => b.classList.remove('active'));
        
        // فعال کردن دکمه کلیک شده
        btn.classList.add('active');
        
        // دریافت کد رنگ
        const selectedColor = btn.getAttribute('data-color');
        
        // اعمال رنگ به کدهای CSS
        document.documentElement.style.setProperty('--primary-color', selectedColor);
        
        // ذخیره رنگ در مرورگر کاربر تا با رفرش پاک نشود
        localStorage.setItem('selectedColor', selectedColor);
    });
});
