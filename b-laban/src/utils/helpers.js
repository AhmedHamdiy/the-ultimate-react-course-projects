export function formatCurrency(value) {
    return new Intl.NumberFormat('ar-EG', {
        style: 'currency',
        currency: 'EGP',
    }).format(value);
}

export function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    });
}

export function calcMinutesLeft(dateStr) {
    const d1 = new Date().getTime();
    const d2 = new Date(dateStr).getTime();
    return Math.round((d2 - d1) / 60000);
}

export function convertArabic(englishNumber) {
    const hindiDigits = {
        0: '٠',
        1: '١',
        2: '٢',
        3: '٣',
        4: '٤',
        5: '٥',
        6: '٦',
        7: '٧',
        8: '٨',
        9: '٩',
    };

    return englishNumber
        .toString()
        .split('')
        .map((char) => hindiDigits[char] || char)
        .join('');
}
