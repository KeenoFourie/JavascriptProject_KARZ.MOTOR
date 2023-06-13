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
        <div id="side_note">
        <img class="img-fluid" id="transparent_car" src="../images/15890762-removebg-preview.png" alt="carImage">
        <p>We ensure that you get the best prices at all times for cars that you need, quickly.</p>
        </div>
        <div id="linked_buttons">
        <a href="#products" id="button_links">PRODUCTS<i class="bi bi-arrow-down"></i></a>
        <a href="../html/admin.html" id="button_links">ADMIN<i class="bi bi-arrow-right"></i></a>
        </div>
        </div>
    <div class="container-fluid" id="about_part">
        <img id="logo_in_body" src="https://i.postimg.cc/RCgMGj5J/logo-removebg-preview.png" alt="logo" loading="lazy" class="img-fluid">
        <div id="about_paragraph">
            <p>This company was formed to make buying and selling cars so much easier and more convenient. We are 100% into making your experience comfortable and enjoyable and take pride in giving you the best service we can possibly give. We love hearing from everyone and your input and feedback is much appreciated. </p>
            <a href="#contact_form" id="contact_us_button">CONTACT US</a>
        </div>
    </div>

    `
})


// products page section
let products_page = [
    {
        id: "1",
        car_model: "2023 Suzuki Swift 1.4T Sport Auto",
        image_url: "https://i.postimg.cc/G3kRDhvb/2023-Suzuki-Swift-1-4-T-Sport-Auto-removebg-preview.png",
        price: "R 209 900",
    },
    {
        id: "2",
        car_model: "2017 Volkswagen Amarok 2.0TDI Double Cab Trendline 4Motion",
        image_url: "https://i.postimg.cc/1tXgtV8R/2017-Volkswagen-Amarok-2-0-TDI-Double-Cab-Trendline-4-Motion-removebg-preview.png",
        price: "R 339 990",
    },
    {
        id: "3",
        car_model: "2017 Renault Duster 1.6 Dynamique",
        image_url: "https://i.postimg.cc/nVgCTLPg/2017-Renault-Duster-1-6-Dynamique-removebg-preview.png",
        price: "R 104 900",
    },
    {
        id: "4",
        car_model: "2018 Ford Focus Hatch 1.0T Ambiente",
        image_url: "https://i.postimg.cc/zBLg72nY/2018-Ford-Focus-Hatch-1-0-T-Ambiente-removebg-preview.png",
        price: "R 219 950",
    },
    {
        id: "5",
        car_model: "2021 Audi A1 Sportback 30TFSI S Line",
        image_url: "https://i.postimg.cc/4N8X4fDw/2021-Audi-A1-Sportback-30-TFSI-S-Line-removebg-preview.png",
        price: "R 399 990",
    },
    {
        id: "6",
        car_model: "2022 Toyota Fortuner 2.4GD-6 Auto",
        image_url: "https://i.postimg.cc/8zWXKwmW/2022-Toyota-Fortuner-2-4-GD-6-Auto-removebg-preview.png",
        price: "R 569 895",
    },
    {
        id: "7",
        car_model: "2018 Ford Ranger 2.2TDCi Double Cab Hi-Rider XL Auto",
        image_url: "https://i.postimg.cc/W48nCyFD/2018-Ford-Ranger-2-2-TDCi-Double-Cab-Hi-Rider-XL-Auto-removebg-preview.png",
        price: "R 359 950",
    },
    {
        id: "8",
        car_model: "2020 BMW M8 Competition Gran Coupe",
        image_url: "https://i.postimg.cc/6pXRLhjy/2020-BMW-M8-M8-Competition-Gran-Coupe-removebg-preview.png",
        price: "R 1 899 990",
    }
]
// display products page content
let products_page_content = document.querySelector("#product_list");
products_page.forEach((product)=> { 
    products_page_content.innerHTML += `
    <div id="products_page_container">
            <div class="card" style="width: 18rem;">
                <img id="car_pics" src="${product.image_url}" class="card-img-top img-fluid" alt="images" loading="lazy">
                <div class="card-body" id="body_of_card">
                    <h5 class="card-car_title">${product.car_model.slice(0, 18)+" ..."}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="../html/checkout.html" class="btn btn-primary" id="cart_add">+ Cart</a>
                </div>
            </div>
    </div>
    `
})


// contact form
let contact_footer_page = [
    {
        
    }
]
let contact_form = document.querySelector("#contact_form");
contact_footer_page.forEach((product)=> {
    contact_form.innerHTML += `
    <div id="contact_footer">
    <form>
    <div class="mb-3" id="form_inputs_style">
          <label for="exampleInputName" class="form-label">Name:</label>
          <input type="text" class="form-control" id="exampleInputName1" placeholder="Please enter your name..." aria-describedby="nameHelp" required>
    </div>
    <div class="mb-3" id="form_inputs_style">
          <label for="exampleInputSurname" class="form-label">Surname:</label>
          <input type="text" class="form-control" id="exampleInputSurname1" placeholder="Please enter your surname..." aria-describedby="surnameHelp" required>
    </div>
    <div class="mb-3" id="form_inputs_style">
          <label for="exampleInputEmail" class="form-label">Email address:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="We won't share your email with anyone else..." aria-describedby="emailHelp" required>
    </div>
    <div class="mb-3" id="form_inputs_style">
        <label for="exampleFormControlTextarea1" class="form-label">Comments or Issues:</label>
        <textarea class="form-control" id="exampleFormComments" rows="3" placeholder="Insert your comments here..."></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
    `
})