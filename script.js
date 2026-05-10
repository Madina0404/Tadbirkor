console.log("Script is running...");

function showMessage() {
    alert("Bog‘lanish uchun pastdagi ma'lumotlardan foydalaning 😊");
}

// 1. Elementlarni tanlab olamiz
const clickableImages = document.querySelectorAll(".gallery img, .certificate-box img, .tadbirkorHaqida");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

// Rasmlarni ochish
clickableImages.forEach(img => {
    img.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = img.src;

        document.body.style.overflow = "hidden";

        // Animatsiya ishlashi uchun
        setTimeout(() => {
            modalImg.style.transform = "scale(1)";
            modalImg.style.opacity = "1";
        }, 10);
    });
});

// Modalni yopish
modal.addEventListener("click", () => {

    modalImg.style.transform = "scale(0.5)";
    modalImg.style.opacity = "0";

    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }, 1000);
});
// 4. Qo'shimcha: "Esc" tugmasini bosganda ham yopiladigan qilish
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});