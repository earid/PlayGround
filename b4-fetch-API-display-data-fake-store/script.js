fetch('https://fakestoreapi.com/products/').then((data) => {
    return data.json();
}).then((comData) => {
    let data1 = '';
    comData.map((values) => {
        data1 += `
            <div class="card">
                <img src="${values.image}" alt="product">
                <h2 class="title">${values.title}</h2>
                <p>${values.description}</p>
                <p class="category">${values.description}</p>
                <p class="price">${values.price} </p>
            </div>
        `
    })
    document.getElementById('cards').innerHTML = data1;
}).catch((err) => {
    console.log(err)
})
