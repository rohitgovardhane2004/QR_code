let qrCodeBox = document.getElementById("qrCodeBox")
let qrCode = document.getElementById("qrCode")
let qrText = document.getElementById("qrText")


// Test Link : https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

function generateQR(){
    if(qrText.value.length == 0){
        alert("Add text")
    }
    else{
        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
        qrCodeBox.classList.add("show-qrCode")
    }
}