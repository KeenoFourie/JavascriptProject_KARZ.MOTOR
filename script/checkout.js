// purchase thanks
let purchase = document.querySelector("#checkout_button")
let display = document.querySelector("#checkout_content")

purchase.addEventListener("click", purchase_thanks);
function purchase_thanks() {
    display.innerHTML += `
    <div id="thanks_for_buyng">
    <div id="reload">
            <i class="bi bi-x-circle" onclick="reload()" id="close_button"></i>
        </div>
        <p>THANKS FOR YOUR PURCHASE. IT WILL BE ATTENDED TO SOON.</p>
        <p>YOUR PURCHASE WILL COST R549,890</p>
        <p><button onclick="reload()" id="pay">PAY</button></p>
    </div>
    `
}


// reload button
function reload() {
    location.reload()
}

// checkout
let checkout_result = document.querySelector("#checkout_content")
let store_purchase = JSON.parse(localStorage.getItem("check_out"));


Object.keys(store_purchase).forEach( (product) => {
    let productlist = store_purchase[product];
    checkout_result.innerHTML += `
    <div id="products_page_container">
            <div class="card" style="width: 18rem;" id="card_checkout">
                <img id="car_pics" src="${productlist.image_url}" class="card-img-top img-fluid" alt="images" loading="lazy">
                <div class="card-body" id="body_of_card">
                    <h5 class="card-car_title">${productlist.car_model.slice(0, 18)+" ..."}</h5>
                    <p class="card-text">${productlist.price}</p>
                </div>
            </div>
    </div>
    `
})

// delete button for items in cart
// delete button

let delete_checkout_button = document.querySelector('#delete_cart_item')
    delete_checkout_button.addEventListener("click", () => {
        localStorage.removeItem("check_out")
        location.reload()
})