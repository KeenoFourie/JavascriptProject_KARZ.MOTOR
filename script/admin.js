// DOM
let display = document.querySelector("#product_list");
let addBtn = document.querySelector("#new_product");
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
    product_image: "",
    description: "",
    price: "",
    },
    {
    id: "2",
    car_model: "",
    product_image: "",
    description: "",
    price: "",
    },
    {
    id: "3",
    car_model: "",
    product_image: "",
    description: "",
    price: "",
    },
    {
    id: "4",
    car_model: "",
    product_image: "",
    description: "",
    price: "",
    },
    {
    id: "5",
    car_model: "",
    product_image: "",
    description: "",
    price: "",
    },
    {
    id: "6",
    car_model: "",
    product_image: "",
    description: "",
    price: "",
    }
];

// LocalStorage
localStorage.setItem('Car_Models', JSON.stringify(featured_products));



// Table
function product_listing(){
featured_products.forEach((data)=>{
    display.innerHTML +=`
     <tr>
        <td id="product_id">${data.id}</td>
        <td id="product_car_model">${data.car_model}</td>
        <td id="product_image"><img class="image" src="${data.product_image}" loading="lazy" alt="${data.car_model}"></td>
        <td id="product_description">${data.description}</td>
        <td id="product_price">${data.price}</td>
        <td id="product_edit_button">
        <button type="button" class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#exampleModal">EDIT</button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Your Product:</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Car model:</p>
                        <input type="text"class="modal-input" id="input_1" placeholder="Tesla..">
                        <p>Image:</p>
                        <input type="" class="modal-input" id="input_2" placeholder="Insert image..">
                        <p>Despcription:</p>
                        <input type="text" class="modal-input" id="imput_3" placeholder="It's a car on 4 wheels..">
                        <p>Price:</p>
                        <input type="text" class="modal-input" id="input_4" placeholder="R20 000...">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-dark" id="new_product">Add Edited Product</button>
                    </div>
                </div>
            </div>
        </div>
        </td>
        <td id="product_delete_"><button type="button" class="btn btn-dark" id="delete_button">DELETE</button></td>
     </tr>
    `
    
})
}
product_listing()



// // Adding to the a new blog
// addBtn.addEventListener('click', addBlog);

// // Add Button
// function addBlog(){
//     result.innerHTML = ""
//     event.preventDefault();
//     if(product_model.value, product_image.value, product_description.value, product_price.value == ''){
//         alert('Please add in new data!')
//         adminList()
//     } else {
        
//         featured_products.push({
//             id: product_id,
//                title: product_model.value,
//                imageUrl: product_image.value,
//                description: product_description.value,
//                content: product_price.value,
//                date: new Date( )
//         });
//         product_id++;
//         product_model.value, product_image.value, product_description.value, product_price.value = '';
//         localStorage.setItem('blogs', JSON.stringify(featured_products));
//         adminList();
//     }
// }

// // delete button
// function deleteButtons(){
//         delButton = [...document.querySelectorAll('.deletebtn')];
//         delButton.forEach((item)=>{
//             item.addEventListener('click', deleteBlog)

//         })
//     }
//     function deleteBlog(event){
//         let start = delButton.indexOf(event.target);
//         featured_products.splice(start, 1);
//         localStorage.setItem('blogs', JSON.stringify(featured_products))
        
//     }

