document.addEventListener("DOMContentLoaded", function () {
    // إخفاء جميع الأقسام عدا قسم الرئيسية
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none"; // إخفاء القسم
    });
    document.querySelector(".home-section").style.display = "block"; // عرض قسم الرئيسية

    // إضافة مستمع للنقر على الأزرار
    const navLinks = document.querySelectorAll(".nav-list li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            // لا تنفذ هذا الجزء إذا كان الزر هو زر الموقع
            if (this.innerText.trim() === "الموقع") {
                return; // عدم القيام بأي شيء إذا كان زر الموقع
            }
            event.preventDefault(); // منع السلوك الافتراضي للرابط

            const targetSection = this.innerText.trim(); // الحصول على نص الزر

            // إخفاء جميع الأقسام
            sections.forEach(section => {
                section.style.display = "none"; // إخفاء القسم
            });

            // عرض القسم المطلوب
            switch (targetSection) {
                case "الرئيسية":
                    document.querySelector(".home-section").style.display = "block";
                    break;
                case "الاخبار":
                    document.querySelector(".news-section").style.display = "block";
                    break;
                case "الاحصائيات":
                    document.querySelector(".alnalysis-section").style.display = "block";
                    break;
                case "الهيكل التنظيمي":
                    document.querySelector(".Organizationalstructure-section").style.display = "block";
                    break;
                default:
                    break;
            }
        });
    });
});


// Hide splash screen with fade-out effect after 3 seconds
window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.splash-screen').classList.add('hidden');
    }, 3000); // Adjust the timing as needed
});

//side bar

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
    // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    }
} z