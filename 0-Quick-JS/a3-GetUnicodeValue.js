/* 
 <input type="text" onkeypress="getUnicode(event);">
*/

function getUnicode(event) {
    var x = event.keyCode;
    x = "Unicode value is " + x;
    alert(x);
}
