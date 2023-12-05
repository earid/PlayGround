let textarea = document.getElementById('textarea');
let counter = document.getElementById('counter');
textarea.addEventListener('input', function () {
    let count = textarea.value.length;
    counter.innerHTML = count + ` Characters`
})
