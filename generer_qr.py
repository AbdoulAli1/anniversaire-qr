import qrcode

#adresse locale de notre carte pour le premier test
url_carte = "http://172.0.0.1:5000"
#configuration du QR code
qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=4
)
qr.add_data(url_carte)
qr.make(fit=True)

#Creation de l'image du QR code
image = qr.make_image(
    fill_color="#4a2435",
    back_color="white"
)

#Enregistrement du QR code
image.save("qr_anniversaire.png")
print("QR code cree avec succes !")
print("Fichier : qr_anniversaire.png")