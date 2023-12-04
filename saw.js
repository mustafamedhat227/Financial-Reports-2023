// script.js
function redirectToPage3() {
    window.location.href = 'page1.html';
}
// توجيه إلى الصفحة الثانية بعد انتهاء الفيديو الأول
function redirectToPage2() {
    window.location.href = 'page2.html';
}

// توجيه إلى الصفحة الثالثة بعد انتهاء الفيديو الثاني
function redirectToPage3() {
    window.location.href = 'page3.html';
}

// تحديد المدة (بالثواني) التي بعد انتهاء الفيديو الأول يتم فيها التوجيه إلى الصفحة الثانية
var durationToPage2 = 0.1; // يمكنك تغيير هذا الرقم حسب احتياجاتك

// تحديد المدة (بالثواني) التي بعد انتهاء الفيديو الثاني يتم فيها التوجيه إلى الصفحة الثالثة
var durationToPage3 = 0.5; // يمكنك تغيير هذا الرقم حسب احتياجاتك

// عند انتهاء الفيديو الأول
function handleVideo1Ended() {
    setTimeout(function () {
        redirectToPage2();
    }, durationToPage2 * 1000); // تحويل الثواني إلى ميلي ثانية
}

// عند انتهاء الفيديو الثاني
function handleVideo2Ended() {
    setTimeout(function () {
        redirectToPage3();
    }, durationToPage3 * 1000); // تحويل الثواني إلى ميلي ثانية
}