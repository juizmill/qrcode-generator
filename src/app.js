const qrcode = require("qrcode-generator")


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('qrcode').innerHTML = "";
    const link = document.querySelector('input').value;

    generate_qr_code(link);
});


function generate_qr_code(link) {
    const typeNumber = 4;
    const errorCorrectionLevel = 'L';
    const qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(link);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createImgTag(6);
}