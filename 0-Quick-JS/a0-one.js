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
// Simple validation of a username with regex
const validateUsr = username => /^[a-z0-9_]{4,16}$/g.test(username);
