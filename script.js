
const openButton = document.getElementById("openModal");
const closeButton = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");




function closeModal() {
    modalOverlay.style.display = "none";
    document.body.style.overflow = "auto";
}



openButton.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", closeModal);

// close modal when clicking outside
modalOverlay.addEventListener("click", (event) => {
    if(event.target === modalOverlay) {
        closeModal();
    }
});

// close modal on esc key 
document.addEventListener("keydown", (event) => {
    if(event.key === "Escape") {
        closeModal();
    }
});