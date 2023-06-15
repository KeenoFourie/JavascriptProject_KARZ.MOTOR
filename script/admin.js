
let display = document.querySelector("#product_list");
let addBtn = document.querySelector("#new_product");
let del_button = document.querySelector("#delete_button")
let edit_product_button = document.querySelector("#edit_products_button")
let product_id = 9;
let product_model = document.querySelector("#input_1");
let product_image = document.querySelector("#input_2");
let product_description = document.querySelector("#input_3");
let product_price = document.querySelector("#input_4");



// Admin Products(objects)
let  featured_products = [
    {
        id: "1",
        car_model: "Suzuki Swift 1.4T Sport Auto 2023",
        image_url: "https://i.postimg.cc/G3kRDhvb/2023-Suzuki-Swift-1-4-T-Sport-Auto-removebg-preview.png",
        description: "",
        price: "R 209 900",
    },
    {
        id: "2",
        car_model: "Volkswagen Amarok 2.0TDI Double Cab Trendline 4Motion 2017",
        image_url: "https://i.postimg.cc/1tXgtV8R/2017-Volkswagen-Amarok-2-0-TDI-Double-Cab-Trendline-4-Motion-removebg-preview.png",
        description: "",
        price: "R 339 990",
    },
    {
        id: "3",
        car_model: "Renault Duster 1.6 Dynamique 2017",
        image_url: "https://i.postimg.cc/nVgCTLPg/2017-Renault-Duster-1-6-Dynamique-removebg-preview.png",
        description: "",
        price: "R 104 900",
    },
    {
        id: "4",
        car_model: "Ford Focus Hatch 1.0T Ambiente 2018",
        image_url: "https://i.postimg.cc/zBLg72nY/2018-Ford-Focus-Hatch-1-0-T-Ambiente-removebg-preview.png",
        description: "",
        price: "R 219 950",
    },
    {
        id: "5",
        car_model: "Audi A1 Sportback 30TFSI S Line 2021",
        image_url: "https://i.postimg.cc/4N8X4fDw/2021-Audi-A1-Sportback-30-TFSI-S-Line-removebg-preview.png",
        description: "",
        price: "R 399 990",
    },
    {
        id: "6",
        car_model: "Toyota Fortuner 2.4GD-6 Auto 2022",
        image_url: "https://i.postimg.cc/8zWXKwmW/2022-Toyota-Fortuner-2-4-GD-6-Auto-removebg-preview.png",
        description: "",
        price: "R 569 895",
    },
    {
        id: "7",
        car_model: "Ford Ranger 2.2TDCi Double Cab Hi-Rider XL Auto 2018",
        image_url: "https://i.postimg.cc/W48nCyFD/2018-Ford-Ranger-2-2-TDCi-Double-Cab-Hi-Rider-XL-Auto-removebg-preview.png",
        description: "",
        price: "R 359 950",
    },
    {
        id: "8",
        car_model: "BMW M8 Competition Gran Coupe 2020",
        image_url: "https://i.postimg.cc/6pXRLhjy/2020-BMW-M8-M8-Competition-Gran-Coupe-removebg-preview.png",
        description: "",
        price: "R 1 899 990",
    }
];

// LocalStorage
localStorage.setItem("Car_Models", JSON.stringify(featured_products));


// Add button
addBtn.addEventListener("click", add_products);
function add_products() {
    display.innerHTML = ""
    event.preventDefault();
    if(product_description.value == '', product_image.value == '', product_model.value == '', product_price.value == ''){
        alert("Please insert information on your car!")
        product_listing()
    } else {
        featured_products.push({
            id: product_id,
            car_model: product_model.value,
            image_url: product_image.value,
            description: product_description.value,
            price: product_price.value,
        });
        product_id++;
        product_description.value = "", product_image.value = "", product_model.value = "", product_price.value = "" ;
        localStorage.setItem("Car_Models", JSON.stringify(featured_products));
        product_listing();
    }
}




// delete button
function delete_button(){
        del_button = [...document.querySelectorAll("#delete_button")];
        del_button.forEach((products)=>{
            products.addEventListener("click", delete_products)
            localStorage.setItem("Car_Models", JSON.stringify(featured_products));
        })
    }
    function delete_products(event){
        display.innerHTML = ""
        let start_point = del_button.indexOf(event.target);
        featured_products.splice(start_point, 1);
        localStorage.setItem("Car_Models", JSON.stringify(featured_products));
        product_listing()
    }

// sort button

let sortBtn = document.querySelector("#sort_button")

sortBtn.addEventListener("click", () => {
    featured_products = featured_products.sort((a, b) => {
        if(a.car_model < b.car_model){
            return -1;
        }
        else {
            return 1;
        }
    })
    display.innerHTML = ""
    localStorage.setItem("Car_Models", JSON.stringify(featured_products));
    product_listing();
})

// filter objects(lowest - highest)
let  low_to_high = [
    {
        id: 1,
        car_model: "Renault Duster 1.6 Dynamique 2017",
        image_url: "https://i.postimg.cc/nVgCTLPg/2017-Renault-Duster-1-6-Dynamique-removebg-preview.png",
        price: "R 104 900",
    },
    {
        id: 2,
        car_model: "Suzuki Swift 1.4T Sport Auto 2023",
        image_url: "https://i.postimg.cc/G3kRDhvb/2023-Suzuki-Swift-1-4-T-Sport-Auto-removebg-preview.png",
        price: "R 209 900",
    },
    {
        id: 3,
        car_model: "Ford Focus Hatch 1.0T Ambiente 2018",
        image_url: "https://i.postimg.cc/zBLg72nY/2018-Ford-Focus-Hatch-1-0-T-Ambiente-removebg-preview.png",
        price: "R 219 950",
    },
    {
        id: 4,
        car_model: "Ford Ranger 2.2TDCi Double Cab Hi-Rider XL Auto 2018",
        image_url: "https://i.postimg.cc/W48nCyFD/2018-Ford-Ranger-2-2-TDCi-Double-Cab-Hi-Rider-XL-Auto-removebg-preview.png",
        price: "R 359 950",
    },
    {
        id: 5,
        car_model: "Audi A1 Sportback 30TFSI S Line 2021",
        image_url: "https://i.postimg.cc/4N8X4fDw/2021-Audi-A1-Sportback-30-TFSI-S-Line-removebg-preview.png",
        price: "R 399 990",
    },
    {
        id: 6,
        car_model: "Volkswagen Amarok 2.0TDI Double Cab Trendline 4Motion 2017",
        image_url: "https://i.postimg.cc/1tXgtV8R/2017-Volkswagen-Amarok-2-0-TDI-Double-Cab-Trendline-4-Motion-removebg-preview.png",
        price: "R 340 000",
    },
    {
        id: 7,
        car_model: "Toyota Fortuner 2.4GD-6 Auto 2022",
        image_url: "https://i.postimg.cc/8zWXKwmW/2022-Toyota-Fortuner-2-4-GD-6-Auto-removebg-preview.png",
        price: "R 569 895",
    },
    {
        id: 8,
        car_model: "BMW M8 Competition Gran Coupe 2020",
        image_url: "https://i.postimg.cc/6pXRLhjy/2020-BMW-M8-M8-Competition-Gran-Coupe-removebg-preview.png",
        price: "R 1 899 990",
    }
];

// filter objects(highest - lowest)
let  high_to_low = [
    {
        id: 1,
        car_model: "BMW M8 Competition Gran Coupe 2020",
        image_url: "https://i.postimg.cc/6pXRLhjy/2020-BMW-M8-M8-Competition-Gran-Coupe-removebg-preview.png",
        price: "R 1 899 990",
    },
    {
        id: 2,
        car_model: "Toyota Fortuner 2.4GD-6 Auto 2022",
        image_url: "https://i.postimg.cc/8zWXKwmW/2022-Toyota-Fortuner-2-4-GD-6-Auto-removebg-preview.png",
        price: "R 569 895",
    },
    {
        id: 3,
        car_model: "Volkswagen Amarok 2.0TDI Double Cab Trendline 4Motion 2017",
        image_url: "https://i.postimg.cc/1tXgtV8R/2017-Volkswagen-Amarok-2-0-TDI-Double-Cab-Trendline-4-Motion-removebg-preview.png",
        price: "R 340 000",
    },
    {
        id: 4,
        car_model: "Audi A1 Sportback 30TFSI S Line 2021",
        image_url: "https://i.postimg.cc/4N8X4fDw/2021-Audi-A1-Sportback-30-TFSI-S-Line-removebg-preview.png",
        price: "R 399 990",
    },
    {
        id: 5,
        car_model: "Ford Ranger 2.2TDCi Double Cab Hi-Rider XL Auto 2018",
        image_url: "https://i.postimg.cc/W48nCyFD/2018-Ford-Ranger-2-2-TDCi-Double-Cab-Hi-Rider-XL-Auto-removebg-preview.png",
        price: "R 359 950",
    },
    {
        id: 6,
        car_model: "Ford Focus Hatch 1.0T Ambiente 2018",
        image_url: "https://i.postimg.cc/zBLg72nY/2018-Ford-Focus-Hatch-1-0-T-Ambiente-removebg-preview.png",
        price: "R 219 950",
    },
    {
        id: 7,
        car_model: "Suzuki Swift 1.4T Sport Auto 2023",
        image_url: "https://i.postimg.cc/G3kRDhvb/2023-Suzuki-Swift-1-4-T-Sport-Auto-removebg-preview.png",
        price: "R 209 900",
    },
    {
        id: 8,
        car_model: "Renault Duster 1.6 Dynamique 2017",
        image_url: "https://i.postimg.cc/nVgCTLPg/2017-Renault-Duster-1-6-Dynamique-removebg-preview.png",
        price: "R 104 900",
    },
];


// filter button

let filter_items = [
    {
        
    }
]
let filter = document.querySelector("#search_result");
filter_items.forEach((product)=> {
    filter.innerHTML += `
    <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="filter"><i class="bi bi-funnel" id="filter_b"> FILTER </i></button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" id="price_filter_1">Price (Lowest - Highest)</a></li>
    <li><a class="dropdown-item" href="#" id="price_filter_2">Price (Highest - Lowest)</a></li>
  </ul>
</div>
    `
})


// filter button functionality low to high
let filter_item_price_1 = document.querySelector("#price_filter_1")
let result_1 = document.querySelector("#filter_results")
let admin_1 = document.querySelector("#admin_table")

filter_item_price_1.addEventListener("click", filter_search_price_1);
function filter_search_price_1() {
    result_1.innerHTML = ""
    result_2.innerHTML = ""
    display.innerHTML = ""
    admin_1.innerHTML = ""
low_to_high.forEach((data)=>{
    result_1.innerHTML += `
    <div id="filter_price_low_to_high">
    <div id="product_id">${data.id}</div>
    <div id="product_image"><img id="images_of_cars_in_javascript" class="image" src="${data.image_url}" loading="lazy" alt="${data.car_model}"></div>
    <div id="product_car_model">${data.car_model.slice(0, 18)+" ..."}</div>
    <div id="product_prices">${data.price}</div>
    <a href="../index_products.html#product_list" class="btn btn-primary" id="cart_add">Go to Products</a>
    </div>
    `
})}



// filter button functionality high to low
let filter_item_price_2 = document.querySelector("#price_filter_2")
let result_2 = document.querySelector("#filter_results")
let admin_2 = document.querySelector("#admin_table")

filter_item_price_2.addEventListener("click", filter_search_price_2);
function filter_search_price_2() {
    result_1.innerHTML = ""
    result_2.innerHTML = ""
    display.innerHTML = ""
    admin_2.innerHTML = ""
high_to_low.forEach((data)=>{
    result_2.innerHTML += `
    <div id="filter_price_high_to_low">
    <div id="product_id">${data.id}</div>
    <div id="product_image"><img id="images_of_cars_in_javascript" class="image" src="${data.image_url}" loading="lazy" alt="${data.car_model}"></div>
    <div id="product_car_model">${data.car_model.slice(0, 18)+" ..."}</div>
    <div id="product_prices">${data.price}</div>
    <a href="../index_products.html#product_list" class="btn btn-primary" id="cart_add">Go to Products</a>
    </div>
    `
})}


// reload button
function reload() {
    location.reload()
}


// edit button


    
function product_listing(){
    featured_products.forEach((data)=>{
        display.innerHTML +=`
     <tr class="">
        <td id="product_item_id">${data.id}</td>
        <td id="product_car_model">${data.car_model}</td>
        <td id="product_image"><img id="images_of_cars_in_javascript" class="image" src="${data.image_url}" loading="lazy" alt="${data.car_model}"></td>
        <td id="product_prices">${data.price}</td>
        <td id="product_edit_button">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">EDIT</button>
        
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Your Product:</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                      <p>Car model:</p>
                      <input type="text"class="modal-input" placeholder="Tesla..">
                      <p>Image:</p>
                      <input type="text" class="modal-input" placeholder="Insert image..">
                      <p>Despcription:</p>
                      <input type="text" class="modal-input" placeholder="It's a car on 4 wheels..">
                      <p>Price:</p>
                      <input type="text" class="modal-input" placeholder="R20 000...">
                  </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="edit_products_button">Edit</button>
        </div>
        </div>
        </div>
        </div>
        </td>
        <td id="product_delete_"><button type="button" class="btn btn-primary" id="delete_button">DELETE</button></td>
     </tr>
    `
    save() 
})
delete_button()
}
product_listing()

function save() {
    localStorage.setItem("Car_Models", display.innerHTML);
}

function show() {
    display.innerHTML = localStorage.getItem("Car_Model")   
}


// checkout
function addToCheckout(product_list) {
    product_checkout.push(product_list);
    localStorage.setItem("check_out", JSON.stringify(product_checkout));
    console.log(product_checkout);
}
