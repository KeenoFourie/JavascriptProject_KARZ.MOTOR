// DOM
let result = document.querySelector("#blogs");
let addBtn = document.querySelector(".newblog");
let tempID = 7;
let tempTitle = document.querySelector(".input1");
let tempImg = document.querySelector(".input2");
let tempDep = document.querySelector(".input3");
let tempCon = document.querySelector(".input4");




// Admin Object
let  featuredPosts = [
    {
    id: " 1 ",
    title: " 2023 Video Game Release Date Calendar ",
    imageUrl: " https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2023%2F01%2F2023-release-gaming-calendar-game-rant.jpg%3Fq%3D50%26fit%3Dcontain%26w%3D1140%26h%3D%26dpr%3D1.5 ",
    description: " Check out this guide to find out the release dates for every major video game coming out in 2023. ",
    content: " BY GREYSUN MORALES ",
    date: new Date( )
    },
    {
    id: " 2 ",
    title: " Will Smith confronts Chris Rock over Jada Pinkett Smith “joke” at Oscars 2022 ",
    imageUrl: " https://www.nme.com/wp-content/uploads/2022/03/will-smith-oscars-2022-696x442.jpg ",
    description: " The actor later apologised for his actions while collecting the award for Best Actor, saying: `Love will make you do crazy things`",
    content: " By Rhian Daly ",
    date: new Date( )
    },
    {
    id: " 3 ",
    title: " Declan Rice delivers pulsating final act to push West Ham over the line ",
    imageUrl: " https://i.guim.co.uk/img/media/045af41da88d37ecceb40e56369fd67b368fad0b/0_164_3500_2100/master/3500.jpg?width=620&quality=45&dpr=2&s=none ",
    description: " Fiorentina impressed but David Moyes's side dug deep thanks to their relentless captain who is expected to leave this summer ",
    content: " By Ed Aarons ",
    date: new Date( )
    },
    {
    id: " 4 ",
    title: " The Dark Assailant - A Short Story ",
    imageUrl: " https://thedarkestblog.com/wp-content/uploads/2022/12/dark-assailant-595x448.jpg ",
    description: " A faint ray of light was still burning in the bedroom that evening before the deafening ringing in her ears began. There was a pit of silence in the room […] ",
    content: " By Nadia Schluter ",
    date: new Date( )
    },
    {
    id: " 5 ",
    title: " WhatsApp launches Channels feature for broadcast messages ",
    imageUrl: " https://techcrunch.com/wp-content/uploads/2023/06/WhatsApp-channels.jpg?w=1390&crop=1 ",
    description: " Meta is rolling out a broadcast-based messaging feature, called Channels, on WhatsApp, similar to a recent update it sent out to Instagram, as the social juggernaut experiments with giving more con... ",
    content: " By Ivan Mehta ",
    date: new Date( )
    },
    {
    id: " 6 ",
    title: " WOK FRIED PEANUTS / HOW TO FRY PEANUTS ",
    imageUrl: "https://thewoksoflife.com/wp-content/uploads/2022/12/Chinese-fried-peanuts-appetizer-4.jpg",
    description: "  You'll see these fried peanuts often in Cantonese restaurants, served in small dishes around a Lazy Susan along with pots of tea. They're the perfect little appetizer while you wait for your meal to arrive. Wok fried peanuts are an ideal... ",
    content: " By JUDY ",
    date: new Date( )
    }
];

// LocalStorage
localStorage.setItem('blogs', JSON.stringify(featuredPosts));

// Adding to the a new blog
addBtn.addEventListener('click', addBlog);

// Add Button
function addBlog(){
    result.innerHTML = ""
    event.preventDefault();
    if(tempTitle.value, tempImg.value, tempDep.value, tempCon.value == ''){
        alert('Please add in new data!')
        adminList()
    } else {
        
        featuredPosts.push({
            id: tempID,
               title: tempTitle.value,
               imageUrl: tempImg.value,
               description: tempDep.value,
               content: tempCon.value,
               date: new Date( )
        });
        tempID++;
        tempTitle.value, tempImg.value, tempDep.value, tempCon.value = '';
        localStorage.setItem('blogs', JSON.stringify(featuredPosts));
        adminList();
    }
}

// delete button
function deleteButtons(){
        delButton = [...document.querySelectorAll('.deletebtn')];
        delButton.forEach((item)=>{
            item.addEventListener('click', deleteBlog)

        })
    }
    function deleteBlog(event){
        let start = delButton.indexOf(event.target);
        featuredPosts.splice(start, 1);
        localStorage.setItem('blogs', JSON.stringify(featuredPosts))
        
    }



// Table
function adminList (){
featuredPosts.forEach((data)=>{
    result.innerHTML +=`
     <tr>
        <td id="td1">${data.id}</td>
        <td id="td2">${data.title}</td>
        <td id="td3"><img class="image" src="${data.imageUrl}" loading="lazy" alt="${data.title}"></td>
        <td id="td4">${data.description}</td>
        <td id="td5">${data.content}</td>
        <td id="td6">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit this Blog</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Title</p>
                        <input type="text"class="modal-input" placeholder="Enter Title..">
                        <p>ImageURL</p>
                        <input type="text" class="modal-input"  placeholder="Enter Image URL..">
                        <p>Despcription</p>
                        <input type="text" class="modal-input"  placeholder="Enter Description..">
                        <p>Content</p>
                        <input type="text" class="modal-input"  placeholder="Enter Content.">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-dark">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        </td>
        <td id="td7"><button type="button" class="btn btn-dark deletebtn" > Delete </button></td>
     </tr>
    `
    
})
deleteButtons()
}

adminList()
