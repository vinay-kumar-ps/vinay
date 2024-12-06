// Adding animations to skill cards
document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = "scale(1.1)";
            setTimeout(() => (card.style.transform = "scale(1)"), 300);
        }, index * 150);
    });
});
