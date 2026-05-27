console.log("Script is running...");

function showMessage() {
    alert("Bog'lanish uchun pastdagi ma'lumotlardan foydalaning 😊");
}

// =====================
// MODAL
// =====================
const clickableImages = document.querySelectorAll(".gallery img, .certificate-box img, .tadbirkorHaqida");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

// Rasmni ochish
clickableImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        document.body.style.overflow = "hidden";

        setTimeout(() => {
            modalImg.style.transform = "scale(1)";
            modalImg.style.opacity = "1";
        }, 10);
    });
});

// Modalni yopish (bosish)
modal.addEventListener("click", () => {
    modalImg.style.transform = "scale(0.5)";
    modalImg.style.opacity = "0";

    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }, 400);
});

// Esc tugmasi bilan yopish
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
        modalImg.style.transform = "scale(0.5)";
        modalImg.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 400);
    }
});

// =====================
// STICKY NAVBAR
// =====================
const navbar = document.getElementById("sticky-navbar");
const aboutSection = document.getElementById("about");

window.addEventListener("scroll", () => {
    if (!aboutSection || !navbar) return;

    const sectionTop = aboutSection.getBoundingClientRect().top;
    if (sectionTop <= 0) {
        navbar.classList.add("visible");
    } else {
        navbar.classList.remove("visible");
    }
});

// Progress bar animatsiyasi
const skillBars = document.querySelectorAll(".skill-fill");

const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            bar.style.width = bar.dataset.width + "%";
        }
    });
};

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);