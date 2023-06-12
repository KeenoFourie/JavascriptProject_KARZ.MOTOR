// Landing page section
let landing_page = [
    {
        content_1: "WELCOME TO",
        content_2: "KARZ.MOTOR",
        content_3: "BUYING CARS HAS NEVER BEEN EASIER THAN THIS BEFORE",
        
    },
]
// display landing page content
let landing_page_content = document.querySelector("#landing_page_welcome");
landing_page.forEach((data)=> {
    landing_page_content.innerHTML += `
    <div id="landing_page_container">
        <div id="home_content_1"><h3>${data.content_1}</h3></div>
        <div id="home_content_2"><h1>${data.content_2}</h1></div>
        <div id="home_content_3"><h3>${data.content_3}</h3></div>
        <div id="linked_buttons">
        <a href="#products" id="button_links">PRODUCT<i class="bi bi-arrow-down"></i></a>
        <a href="../html/admin.html" id="button_links">ADMIN<i class="bi bi-arrow-right"></i></a>
        </div>
    </div>
    `
})


// products page section
let products_page = [
    {
        id: "1",
        title: "ljfdn",
        imageUrl: "sjdfbk",
        description: "oufsdjcn",
        price: "oewfusdjl",
    },
    {
        id: "2",
        title: "ljfdn",
        imageUrl: "sjdfbk",
        description: "oufsdjcn",
        price: "oewfusdjl",
    },
    {
        id: "3",
        title: "ljfdn",
        imageUrl: "sjdfbk",
        description: "oufsdjcn",
        price: "oewfusdjl",
    },
    {
        id: "4",
        title: "ljfdn",
        imageUrl: "sjdfbk",
        description: "oufsdjcn",
        price: "oewfusdjl",
    },
    {
        id: "5",
        title: "ljfdn",
        imageUrl: "sjdfbk",
        description: "oufsdjcn",
        price: "oewfusdjl",
    },
    {
        id: "6",
        title: "ljfdn",
        imageUrl: "sjdfbk",
        description: "oufsdjcn",
        price: "oewfusdjl",
    },
    {
        id: "7",
        title: "ljfdn",
        imageUrl: "sjdfbk",
        description: "oufsdjcn",
        price: "oewfusdjl",
    },
    {
        id: "8",
        title: "ljfdn",
        imageUrl: "sjdfbk",
        description: "oufsdjcn",
        price: "oewfusdjl",
    },
    {
        id: "9",
        title: "ljfdn",
        imageUrl: "sjdfbk",
        description: "oufsdjcn",
        price: "oewfusdjl",
    },
    {
        id: "10",
        title: "ljfdn",
        imageUrl: "sjdfbk",
        description: "oufsdjcn",
        price: "oewfusdjl",
    },
]
// display products page content
let products_page_content = document.querySelector("#product_list");
products_page.forEach((product)=> {
    products_page_content.innerHTML += `
    <div id="products_page_container">
            <div class="card" style="width: 18rem;">
                <img src="${product.imageUrl}" class="card-img-top" alt="images" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="../html/checkout.html" class="btn btn-primary">+ Cart</a>
                </div>
            </div>
    </div>
    `
})