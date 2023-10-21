let btn = document.getElementById('btn');
let result = document.getElementById('result');
btn.addEventListener('click', function () {
    let dateVal = document.querySelector('#date').value;
    let dob = new Date(dateVal).getTime();
    let dateToday = new Date().getTime();
    let diff = dateToday - dob;
    let ageFind = Math.floor((diff) / (1000 * 60 * 60 * 24 * 365));
    result.innerHTML = `Your are ${ageFind} years old`

})
