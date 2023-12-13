// Open Link in New Tab using JavaScript
function clickMe() {
    window.open('https://www.youtube.com/', '_blank')
}
// Get Image Width and Height
function myFun() {
    let img = document.getElementById('image');
    let width = img.naturalWidth;
    let height = img.naturalHeight;
    alert('Image Width =' + width + ' Image height = ' + height);
}
