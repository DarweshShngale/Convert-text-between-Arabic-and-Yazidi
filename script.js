const arabicToYezidi = {
    'ا': '𐺀', 'أ': '𐺀', 'إ': '𐺀', 'ة': '𐺀', 'ى': '𐺀',
    'ب': '𐺁', 'پ': '𐺂', 'ت': '𐺄', 'ث': '𐺗',
    'ج': '𐺆', 'چ': '𐺇', 'ح': '𐺉', 'خ': '𐺊',
    'د': '𐺋', 'ذ': '𐺌', 'ر': '𐺍', 'ڕ': '𐺎',
    'ز': '𐺏', 'ژ': '𐺐', 'س': '𐺑', 'ش': '𐺒',
    'ص': '𐺓', 'ض': '𐺔', 'ط': '𐺕', 'ظ': '𐺖',
    'ع': '𐺗', 'غ': '𐺘', 'ف': '𐺙', 'ڤ': '𐺚', 'ڤ': '𐺛',
    'ق': '𐺜', 'ك': '𐺝', 'ك': '𐺞', 'گ': '𐺟', 'ل': '𐺠',
    'م': '𐺡', 'ن': '𐺢', 'و': '𐺣', 'و': '𐺤', 'ۆ': '𐺥', 'ؤ': '𐺥',
    'ه': '𐺧', 'ي': '𐺨', 'ێ': '𐺩', 'ئ': '𐺩'
};

const yezidiToArabic = {
    '𐺀': 'ا', '𐺁': 'ب', '𐺂': 'پ', '𐺃': 'پ',
    '𐺄': 'ت', '𐺗': 'ع', '𐺆': 'ج', '𐺇': 'چ', '𐺈': 'چ',
    '𐺉': 'ح', '𐺊': 'خ', '𐺋': 'د', '𐺌': 'ذ',
    '𐺍': 'ر', '𐺎': 'ڕ', '𐺏': 'ز', '𐺐': 'ژ',
    '𐺑': 'س', '𐺒': 'ش', '𐺓': 'ص', '𐺔': 'ض',
    '𐺕': 'ط', '𐺖': 'ظ', '𐺘': 'غ', '𐺙': 'ف',
    '𐺚': 'ڤ', '𐺛': 'ڤ', '𐺜': 'ق', '𐺝': 'ك', '𐺞': 'ك',
    '𐺟': 'گ', '𐺠': 'ل', '𐺡': 'م', '𐺢': 'ن',
    '𐺣': 'و', '𐺤': 'و', '𐺥': 'ۆ', '𐺧': 'ه',
    '𐺨': 'ي', '𐺩': 'ێ'
};

function convertText() {
    let inputText = document.getElementById("inputText").value;
    let direction = document.getElementById("direction").value;
    let outputText = '';

    if (direction === "toYezidi") {
        for (let char of inputText) {
            outputText += arabicToYezidi[char] || char;
        }
    } else {
        for (let char of inputText) {
            outputText += yezidiToArabic[char] || char;
        }
    }
    document.getElementById("output").innerText = outputText;
}
