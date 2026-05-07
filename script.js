console.log("Script is running...");

function showMessage() {
    alert("Bog‘lanish uchun pastdagi ma'lumotlardan foydalaning 😊");
}
console.log("Script is running...");

function showMessage() {
    alert("Bog‘lanish uchun pastdagi ma'lumotlardan foydalaning 😊");
}

/* Rasmlarni kattalashtirish */
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

/* Qayta bosilganda yopiladi */
modal.addEventListener("click", () => {
    modal.style.display = "none";
});