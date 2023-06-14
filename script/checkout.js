// contact form
let checkout_page = [
    {
        
    }
]
let checkout_content = document.querySelector("#checkout_content");
checkout_page.forEach((product)=> {
    checkout_content.innerHTML += `
    <div id="checkout_full_page" class="container-fluid">
    <button id="button_for_checkout">PURCHASE<i class="bi bi-arrow-bar-right display-6"></i></button>
    </div>
    `
})

// purchase thanks
let purchase = document.querySelector("#button_for_checkout")
let display = document.querySelector("#checkout_content")

purchase.addEventListener("click", purchase_thanks);
function purchase_thanks() {
    display.innerHTML += `
    <div id="thanks_for_buyng">
        <p>THANKS FOR YOUR PURCHASE. IT WILL BE ATTENDED TO SOON.</p>
    </div>
    `
}