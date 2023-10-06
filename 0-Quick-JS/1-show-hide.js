var a;
function showHide() {
  if (a == 1) {
    document.getElementById('img').style.display = 'inline';
    return a = 0;
  } else {
    document.getElementById('img').style.display = 'none';
    return a = 1;
  }
}
-----------
   <body>
    <img id="img" src="/img/5.jpg" alt="" />
    <div><button onclick="showHide()">Show & Hide</button></div>
  </body>
