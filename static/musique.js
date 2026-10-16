
const audio = document.getElementById("musique-anniversaire");
const bouton = document.getElementById("bouton-musique");
const statut = document.getElementById("statut-musique");
const barre = document.getElementById("barre-musique");
const tempsActuel = document.getElementById("temps-actuel");
const dureeMusique = document.getElementById("duree-musique");

function formaterTemps(secondes) {
    if (!Number.isFinite(secondes)) return "0:00";

    const minutes = Math.floor(secondes / 60);
    const reste = Math.floor(secondes % 60);

    return `${minutes}:${String(reste).padStart(2, "0")}`;
}

audio.addEventListener("loadedmetadata", () => {
    barre.max = audio.duration || 100;
    dureeMusique.textContent = formaterTemps(audio.duration);
});

bouton.addEventListener("click", async () => {
    if (audio.paused) {
        try {
            await audio.play();
            bouton.textContent = "Ⅱ";
            bouton.setAttribute("aria-label", "Mettre la musique en pause");
            bouton.setAttribute("aria-pressed", "true");
            statut.textContent = "La musique est en cours de lecture ♫";
        } catch (erreur) {
            statut.textContent = "Lecture impossible. Vérifie le fichier audio.";
        }
    } else {
        audio.pause();
        bouton.textContent = "▶";
        bouton.setAttribute("aria-label", "Lire la musique");
        bouton.setAttribute("aria-pressed", "false");
        statut.textContent = "Musique en pause";
    }
});

audio.addEventListener("timeupdate", () => {
    tempsActuel.textContent = formaterTemps(audio.currentTime);
    barre.value = audio.currentTime;
});

barre.addEventListener("input", () => {
    if (Number.isFinite(audio.duration)) {
        audio.currentTime = Number(barre.value);
    }
});

audio.addEventListener("ended", () => {
    bouton.textContent = "▶";
    bouton.setAttribute("aria-label", "Lire la musique");
    bouton.setAttribute("aria-pressed", "false");
    statut.textContent = "Une mélodie pour toi ♡";
});

audio.addEventListener("error", () => {
    statut.textContent = "Fichier audio introuvable ou illisible.";
});
