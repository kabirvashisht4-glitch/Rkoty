// let k = fetch('https://dummyjson.com/quotes/random')
// k.then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(`Quote of the day is ${data.quote} - by ${data.author}`)
// })


// 1. Select the DOM elements
const btn = document.getElementById('fetchBtn');
const list = document.getElementById('productList');

// 2. Add the click event
btn.addEventListener('click', () => {
    
    // Show a loading message while we wait for the API
    list.innerHTML = "<li>Fetching from server...</li>";

    // ---------------------------------------------------------
    // YOUR TURN: Write the fetch() call below!
    // Endpoint: 'https://dummyjson.com/products'
    // ---------------------------------------------------------

    fetch('https://dummyjson.com/products')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Clear the "Fetching..." message
            list.innerHTML = ""; 
            
            // YOUR MISSION:
            // 1. Loop through 'data.products'
            // 2. Check if the product.price is > 500
            // 3. If it is, use this code to add it to the DOM:
            // 
            // let li = document.createElement('li');
            // li.innerText = `${product.title} - $${product.price}`;
            // list.appendChild(li);
            for(let i of data['products']){
                if (i.price > 500){
                    let li = document.createElement('li')
                    li.innerText = `${i.title} - $${i.price}`;
                    list.appendChild(li)
                }
            }

        })
        .catch((error) => {
            console.log("Error:", error);
            list.innerHTML = `<li>Server Error: ${error}</li>`;
        });
});