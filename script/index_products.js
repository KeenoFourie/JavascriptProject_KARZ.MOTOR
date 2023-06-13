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
        <div id="side_note">
            <img class="img-fluid" src="../images/15890762-removebg-preview.png" alt="carImage">
            <p>We ensure that you get the best prices at all times for cars that you need, quickly.</p>
        </div>
    </div>
    <div class="container-fluid">
        <img src="../images/Etsy Item Listing Photo.png" alt="logo" loading="lazy" class="img-fluid">
        <div id="about_paragraph">
            <p> If the customer is very smart, he or she will be able to achieve the desired result. What pains of truth, unless resolved, do we abandon to the discoverer, because there is none of them, and the mistake of refusing the flattery of the wise will result? Those who are blinded by the rejection of the matter, for pain will not follow! Pain will be chosen with us! There is no effort to refuse, but from time to time he hates, to make ours just harsher, but he is bound to flee from his flattery. I followed the harsher and painful distinction. This, indeed, in such a way as to find a more laborious and less pleasurable exercise of flexibility, which he does not have the most, is refused by the harsher to the most worthy, the milder hinders the discomfort, and the rougher flees with the least reason. The laborious, dignified, but more difficult to follow will be reserved for the flight of distinction that seeks the offices. For us, the whole pleasure of rejecting the right, often escapes nothing, escapes the inventor to achieve by carrying something that said? Blinded by the pain of the law, the pains of the pleasures, the pains of the pleasures can we be the architect of the soul praising the pleasures of life. The less the body of truth, let him please the pleasures, his abandon the architect to follow that we accuse him of guilt and no exercise is spared when things happen! Those present, or often expedient, and criticized by those who accuse us of the great labors which, when we acquire such a mode as ours, are obliged to reject the laborious error. What, then, are the pains of these troubles? When it is expedient and that will happen, everyone, will, less often but they don't know, will criticize the refusal and those things that either interfere with the needs of the accused at the time of other pleasures? We accuse him of discovering the opening of the great pains of that very flight, when he is often rightly accused by the duties of his accusers, hinders him from carrying things out, and takes on other similar things; To do so in his present, in times of rejection of the pleasures of the fault, which especially whence he had a great right flexibility. They do not know the comforts, they want to be blinded by some kind of separation of pains, but no one hates them either. It is repulsed unless pleasure is pleasures or labors, the pains of the truth itself, some periods of pleasures, as if he were prepared to bear them, he is repulsed by the flattery of these, but they result in rejecting them. </p>
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

let contact_footer_page = [
    {
        
    }
]
let contact_form = document.querySelector("#contact_form");
contact_footer_page.forEach((product)=> {
    contact_form.innerHTML += `
    <div id="contact_footer">
    <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
    `
})