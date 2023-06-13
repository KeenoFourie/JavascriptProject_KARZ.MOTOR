let display = document.querySelector("#product_list");
let addBtn = document.querySelector("#new_product");
let del_button = document.querySelector("#delete_button")
let edit_product_button = document.querySelector("#edit_products_button")
let product_id = 7;
let product_model = document.querySelector("#input_1");
let product_image = document.querySelector("#input_2");
let product_description = document.querySelector("#input_3");
let product_price = document.querySelector("#input_4");




// Admin Products(objects)
let  featured_products = [
    {
    id: "1",
    car_model: "",
    image_url: "",
    description: "",
    price: "",
    },
    {
    id: "2",
    car_model: "",
    image_url: "",
    description: "",
    price: "",
    },
    {
    id: "3",
    car_model: "",
    image_url: "",
    description: "",
    price: "",
    },
    {
    id: "4",
    car_model: "",
    image_url: "",
    description: "",
    price: "",
    },
    {
    id: "5",
    car_model: "",
    image_url: "",
    description: "",
    price: "",
    },
    {
    id: "6",
    car_model: "",
    image_url: "",
    description: "",
    price: "",
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
            <td id="product_image"><img class="image" src="${data.image_url}" loading="lazy" alt="${data.car_model}"></td>
            <td id="product_descriptions">${data.description}</td>
            <td id="product_prices">${data.price}</td>
            <td id="product_edit_button">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">EDIT</button>
            
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
            <td id="product_delete_"><button type="button" class="btn btn-dark" id="delete_button">DELETE</button></td>
         </tr>
        `
        
    })
    delete_button()
    }
    product_listing()