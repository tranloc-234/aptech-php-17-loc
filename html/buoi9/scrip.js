var rePicture = document.getElementById('bong-den');
function bat() {
    rePicture.src = 'pic_bulbon.gif';
}
function tat() {
    rePicture.src = 'pic_bulboff.gif';
}
function batTat() {
    console.log(rePicture.src);
    if (rePicture.src.includes('bulboff')) { //== 'http://127.0.0.1:5500/html/buoi9/pic_bulboff.gif') {
        rePicture.src = "./pic_bulbon.gif";
    } else {
        rePicture.src = "./pic_bulboff.gif";
    }
    
}
