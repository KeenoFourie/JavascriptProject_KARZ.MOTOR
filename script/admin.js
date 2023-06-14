let prod = JSON.parse(localStorage.getItem("Car_Models"));

let display = document.querySelector("#product_list");
let addBtn = document.querySelector("#new_product");
let del_button = document.querySelector("#delete_button")
let edit_product_button = document.querySelector("#edit_products_button")
let product_id = 8;
let product_model = document.querySelector("#input_1");
let product_image = document.querySelector("#input_2");
let product_description = document.querySelector("#input_3");
let product_price = document.querySelector("#input_4");


// Admin Products(objects)
let  featured_products = [
    {
        id: "1",
        car_model: "2023 Suzuki Swift 1.4T Sport Auto",
        image_url: "https://i.postimg.cc/G3kRDhvb/2023-Suzuki-Swift-1-4-T-Sport-Auto-removebg-preview.png",
        description: "",
        price: "R 209 900",
    },
    {
        id: "2",
        car_model: "2017 Volkswagen Amarok 2.0TDI Double Cab Trendline 4Motion",
        image_url: "https://i.postimg.cc/1tXgtV8R/2017-Volkswagen-Amarok-2-0-TDI-Double-Cab-Trendline-4-Motion-removebg-preview.png",
        description: "",
        price: "R 339 990",
    },
    {
        id: "3",
        car_model: "2017 Renault Duster 1.6 Dynamique",
        image_url: "https://i.postimg.cc/nVgCTLPg/2017-Renault-Duster-1-6-Dynamique-removebg-preview.png",
        description: "",
        price: "R 104 900",
    },
    {
        id: "4",
        car_model: "2018 Ford Focus Hatch 1.0T Ambiente",
        image_url: "https://i.postimg.cc/zBLg72nY/2018-Ford-Focus-Hatch-1-0-T-Ambiente-removebg-preview.png",
        description: "",
        price: "R 219 950",
    },
    {
        id: "5",
        car_model: "2021 Audi A1 Sportback 30TFSI S Line",
        image_url: "https://i.postimg.cc/4N8X4fDw/2021-Audi-A1-Sportback-30-TFSI-S-Line-removebg-preview.png",
        description: "",
        price: "R 399 990",
    },
    {
        id: "6",
        car_model: "2022 Toyota Fortuner 2.4GD-6 Auto",
        image_url: "https://i.postimg.cc/8zWXKwmW/2022-Toyota-Fortuner-2-4-GD-6-Auto-removebg-preview.png",
        description: "",
        price: "R 569 895",
    },
    {
        id: "7",
        car_model: "2018 Ford Ranger 2.2TDCi Double Cab Hi-Rider XL Auto",
        image_url: "https://i.postimg.cc/W48nCyFD/2018-Ford-Ranger-2-2-TDCi-Double-Cab-Hi-Rider-XL-Auto-removebg-preview.png",
        description: "",
        price: "R 359 950",
    },
    {
        id: "8",
        car_model: "2020 BMW M8 Competition Gran Coupe",
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
        prod.push({
            id: product_id,
            car_model: product_model.value,
            image_url: product_image.value,
            description: product_description.value,
            price: product_price.value,
        });
        product_id++;
        product_description.value = "", product_image.value = "", product_model.value = "", product_price.value = "" ;
        localStorage.setItem("Car_Models", JSON.stringify(featured_products));
        location.reload();
        product_listing();
    }
}

localStorage.setItem("Car_Models", JSON.stringify(featured_products));



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



// edit button

    
    
    function product_listing(){
    featured_products.forEach((data)=>{
        display.innerHTML +=`
         <tr class="">
            <td id="product_id">${data.id}</td>
            <td id="product_car_model">${data.car_model}</td>
            <td id="product_image"><img id="images_of_cars_in_javascript" class="image" src="${data.image_url}" loading="lazy" alt="${data.car_model}"></td>
            <td id="product_descriptions">${data.description}</td>
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
        
    })
    delete_button()
    }
    product_listing()