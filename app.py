from flask import Flask, render_template
import os
app = Flask(__name__)

@app.route("/")
def accueil():
    dossier_photos = os.path.join(
        app.static_folder, "photos"
    )
    extension = (".jpg", ".jpeg", ".png", ".webp")
    photos = sorted([
        fichier
        for fichier in os.listdir(dossier_photos)
        if fichier.lower().endswith(extension)
    ])if os.path.exists(dossier_photos) else []
    return render_template("anniversaire.html", photos=photos)

if __name__ == "__main__":
    app.run(debug=True)