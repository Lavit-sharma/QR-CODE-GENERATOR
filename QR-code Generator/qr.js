
function generateQRCode() {
    const url = document.getElementById('search').value;
    if (!url) {
        alert("Please enter a URL");
        return;
    }

   
    document.getElementById('loader').style.display = 'block';
    document.getElementById('qrcode').innerHTML = "";

    
    setTimeout(() => {
        new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 128,
            height: 128
        });

       
        document.getElementById('loader').style.display = 'none';
    }, 2000); }
