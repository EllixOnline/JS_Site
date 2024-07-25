'use strict'



const accounts = 
[
    {
     name: "Nikita",
     lastname: "Katsovich",
     phone: "0546850131",
     email: "ellixonline@gmail.com",
     city: "Haifa",
     address: "Yad La Banim 206" ,
     profilepiclink: "./images/ProfilePicPlaceholder.jpg"  
    },

    {
        name: "Amit",
        lastname: "Nosayev",
        phone: "0544883203",
        email: "abednosayev@gmail.com",
        city: "Or Akiva",
        address: "CityStreet 20" ,
        profilepiclink: "./images/ProfilePicPlaceholder.jpg" 
    },

    {
        name: "Rachel",
        lastname: "Silver",
        phone: "0546669991",
        email: "mishkahandesaim@gmail.com",
        city: "Ofakim",
        address: "Uriel 55" ,
        profilepiclink: "./images/ProfilePicPlaceholder.jpg" 
    }

]

create();

function create() {
    let content = "";
    const container = document.getElementsByClassName("contact_container")[0];
    accounts.forEach((elem, index) => {
        content += `
        <div class="contact_div">
            <div class="contact_image">
                <img src="" alt="Error" onerror="this.onerror=null; this.src='./images/ProfilePicPlaceholder.jpg'">
            </div>
            <div class="contact_info">
                <div>
                    <b><u>Name</u>:</b> ${elem.name} <br>
                    <b><u>Phone</u>:</b> ${elem.phone} <br>
                </div>
            </div>
            <div class="contact_buttons">
                <img class="hover-effect" src="./images/Icons/IcoInfo.png" onclick="InfoContact(${index})">
                <img class="hover-effect" src="./images/Icons/IcoEdit.png" onclick="EditContact(${index})">
                <img class="hover-effect" src="./images/Icons/IcoRemove.png" onclick="RemoveContact(${index})">
            </div>
        </div>`;
    });

    container.innerHTML += content;
}

function myFunction() 
{
    let overlayelement = document.getElementById('screenoverlay');

    alert = document.getElementById('screenoverlay');

    if (overlayelement && !overlayelement.classList.contains('full-screen-overlay')) 
    {
        console.log("changed from hidden to visible");
        overlayelement.classList.add('full-screen-overlay');
        overlayelement.classList.remove('hidden_class');

    } 
    
    else 
    {
        console.log("changed from visible to hidden");
        overlayelement.classList.add('hidden_class');
        overlayelement.classList.add('popup_window');
        overlayelement.classList.remove('full-screen-overlay');
       
    }
  }

  function DeleteAll()
  {
    if (confirm(`Do you want to DELETE ALL CONTACTS?`))
    {
    const container = document.getElementsByClassName("contact_container")[0];
    container.innerHTML = "";
    accounts = [{}];
    create();
    }
  }

  function InfoContact(index) {
    let overlayElement = document.getElementById('screenoverlay');
    overlayElement.classList.add('full-screen-overlay');
    overlayElement.classList.remove('hidden_class');
    let popupContent = document.createElement('div');
    popupContent.classList.add('popup_window');
    popupContent.innerHTML = `
        <form>
            <label>Name: ${accounts[index].name}</label><br>
            <label>Last Name: ${accounts[index].lastname}</label><br>
            <label>Phone: ${accounts[index].phone}</label><br>
            <label>Email: ${accounts[index].email}</label><br>
            <label>Address: ${accounts[index].city}<br>${accounts[index].address}</label>
        </form>
    `;

    overlayElement.appendChild(popupContent);
}



function AddContact(index) {
    let overlayElement = document.getElementById('screenoverlay');
    overlayElement.classList.add('full-screen-overlay');
    overlayElement.classList.remove('hidden_class');
    let popupContent = document.createElement('div');
    popupContent.classList.add('popup_window');
    popupContent.innerHTML = `
        <form>
            <label>Name:</label><br>
            <input type="text" id="name" placeholder="name"></input><br>
            <label>Last Name:}</label><br>
            <input type="text" id="lastName" placeholder="last name"></input><br>
            <label>Phone:</label><br>
            <input type="number" id="phone" placeholder="phone"></input><br>
            <label>Email:</label><br>
            <input type="text" id="email" placeholder="email"></input><br>
            <label>City:</label><br>
            <input type="text" id="city" placeholder="city"></input><br>
            <label>Address:</label><br>
            <input type="text" id="address" placeholder="address"></input><br>
            <button class="buttonAdd" onclick="add()">Add</button>
        </form>
    `;

    overlayElement.appendChild(popupContent);
}

function RemoveContact (index)

{
    if (confirm(`Do you want to DELETE ${accounts[index].name}'s accout? `))
    {
    const container = document.getElementsByClassName("contact_container")[0];
    container.innerHTML = "";
    accounts.splice(index, 1);
    create();
    }
}
