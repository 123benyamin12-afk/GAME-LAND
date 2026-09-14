document.addEventListener('DOMContentLoaded', () => {
    // دریافت تمام کارت‌های رنگی و عناصر تغییرکننده
    const colorCards = document.querySelectorAll('.color-card');
    const heroTitle = document.querySelector('.hero h1 span');
    const logoSpan = document.querySelector('.logo span');

    // آرایه تعریف ترکیب رنگ‌ها (مطابق با کلاس‌های CSS)
    const colorThemes = {
        'color-1': { primary: '#00f2fe', secondary: '#4facfe' },
        'color-2': { primary: '#ff0844', secondary: '#ffb199' },
        'color-3': { primary: '#0ba360', secondary: '#3cba92' },
        'color-4': { primary: '#654ea3', secondary: '#eaafc8' },
        'color-5': { primary: '#f6d365', secondary: '#fda085' },
        'color-6': { primary: '#b224ef', secondary: '#7579ff' },
        'color-7': { primary: '#11998e', secondary: '#38ef7d' }
    };

    // افزودن رویداد کلیک برای هر کارت مستطیلی
    colorCards.forEach(card => {
        card.addEventListener('click', () => {
            // شناسایی کلاس رنگی کلیک شده
            const colorClass = Array.from(card.classList).find(c => c.startsWith('color-'));

            if (colorClass && colorThemes[colorClass]) {
                const selectedTheme = colorThemes[colorClass];

                // تغییر رنگ متون و بخش‌های شاخص سایت
                if (heroTitle) {
                    heroTitle.style.color = selectedTheme.primary;
                    heroTitle.style.textShadow = `0 0 15px ${selectedTheme.primary}`;
                }

                if (logoSpan) {
                    logoSpan.style.color = selectedTheme.secondary;
                }

                // افکت کادر نئونی روی مستطیل انتخاب‌شده
                colorCards.forEach(c => c.style.border = '1px solid rgba(255, 255, 255, 0.1)');
                card.style.border = `2px solid ${selectedTheme.primary}`;
            }
        });
    });
});
