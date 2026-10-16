fermer.addEventListener("click", fermerGalerie);
precedent.addEventListener("click", () => afficherPhoto(indexActuel - 1));
suivant.addEventListener("click", () => afficherPhoto(indexActuel + 1));

visionneuse.addEventListener("click", (event)=>{
    if (event.target === visionneuse) fermerGalerie();
});

document.addEventListener("keydown", (event) => {
    if (visionneuse.hidden) return;
    if (event.key === "Escape") fermerGalerie();
    if (event.key === "ArrowLeft") afficherPhoto(indexActuel - 1);
    if (event.key === "ArrowRight") afficherPhoto(indexActuel + 1);
});