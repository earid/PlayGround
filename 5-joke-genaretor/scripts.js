const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?type=single&idRange=0-300';

let getJoke = () => {
    fetch(url).then(data => data.json())
        .then(item => {
            jokeContainer.textContent = `
            ${item.joke}
            `
        });
}
getJoke();
