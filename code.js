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


//Listener for search bar key press
document.getElementById("inputintosearch").addEventListener("input", function(event) 
{
    searchIt();
});




create();

function create(search) {
    let content = "";
    const container = document.getElementsByClassName("contact_container")[0];
    if(search == null || search == '')
    {
        accounts.forEach((elem, index) => 
            {
            content += `
            <div class="contact_div">
                <div class="contact_image">
                    <img src="" alt="Error" class="hover-effect" onerror="this.onerror=null; this.src='./images/ProfilePicPlaceholder.jpg'">
                </div>
                <div class="contact_info">
                    <div>
                        <b><u>Name</u>:</b> ${elem.name} <br>
                        <b><u>Phone</u>:</b> ${elem.phone} <br>
                    </div>
                </div>
                <div class="contact_buttons">
                    <button onclick="InfoContact(${index})"><img class="hover-effect" src="./images/Icons/IcoInfo.png" ></button>
                    <button onclick="EditContact(${index})"><img class="hover-effect" src="./images/Icons/IcoEdit.png" ></button>
                    <button onclick="RemoveContact(${index})"><img class="hover-effect" src="./images/Icons/IcoRemove.png"></button>
                </div>
            </div>`;
            }
        )
    }
    else
    {
    accounts.forEach((elem, index) => 
        {
        if(elem.name.includes(search) || elem.phone.includes(search))
        {
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
        }
    })}
    ;
    container.innerHTML += content;
}


function searchIt()
{
    const container = document.getElementsByClassName("contact_container")[0];
    container.innerHTML = "";
    const searchMe= document.getElementById('inputintosearch').value;
    create(searchMe);
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
    accounts.length = 0;
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
        <div class='infobox'>
        <div class='close'>
        <button onclick='InfoContactClose()'><img src='./images/icons/x-mark.png'><button>
        </div>
        <div class='information'>
        <form>
            <label>Name: ${accounts[index].name}</label><br>
            <label>Last Name: ${accounts[index].lastname}</label><br>
            <label>Phone: ${accounts[index].phone}</label><br>
            <label>Email: ${accounts[index].email}</label><br>
            <label>Address: ${accounts[index].city}<br>${accounts[index].address}</label>
        </form>
        </div>
        </div>
    `;

    overlayElement.appendChild(popupContent);
}

function InfoContactClose()
{
    let overlayElement = document.getElementById('screenoverlay');
    overlayElement.classList.add('hidden_class');
    overlayElement.classList.remove('full-screen-overlay');
}



function AddContact() {
    let overlayElement = document.getElementById('screenoverlay');
    overlayElement.classList.add('full-screen-overlay');
    overlayElement.classList.remove('hidden_class');
    let popupContent = document.createElement('div');
    popupContent.classList.add('popup_window');
    popupContent.innerHTML = `
        <div class='infobox'>
        <div class='close'>
        <button onclick='InfoContactClose()'><img src='./images/icons/x-mark.png'><button>
        </div>
        <div class='information'>
        <form>
            <label>Name:</label><br>
            <input type="text" id="name" placeholder="name"></input><br>
            <label>Last Name:</label><br>
            <input type="text" id="lastname" placeholder="last name"></input><br>
            <label>Phone:</label><br>
            <input type="number" id="phone" placeholder="phone"></input><br>
            <label>Email:</label><br>
            <input type="text" id="email" placeholder="email"></input><br>
            <label>City:</label><br>
            <input type="text" id="city" placeholder="city"></input><br>
            <label>Address:</label><br>
            <input type="text" id="address" placeholder="address"></input><br>
            <label>Image URL:<br>
            <input type="text" id="image" placeholder="address"></input><br>
        </form>
        <button class="buttonAdd" onclick="sendInfo()">Add</button>
        </div>
        </div>
    `;

    overlayElement.appendChild(popupContent);

    

}

function CheckExisting(name,lastname,phone)
{
    let code = 3;
    alert("Checkingexisting");
    accounts.forEach((elem, index) => 
    {
        if(elem.name == name && elem.lastname == lastname)
            code = 1;
    });

    if(code == 3)
    {
    accounts.forEach((elem, index) => 
        {
            if(elem.phone == phone)
                code = 2;
        });
    }
    return code;

    
}

function sendInfo()
{
    event.preventDefault();

    // Use `let` instead of `const` to allow reassignment
    let contact_name = '';
    let contact_lastname = '';
    let contact_phone = '';
    let contact_email = '';
    let contact_city = '';
    let contact_address = '';
    let contact_image = '';

    

    const container = document.getElementsByClassName("contact_container")[0];

    alert("Sent");
    // Assign values from input fields
    contact_name = document.getElementById('name').value;
    contact_lastname = document.getElementById('lastname').value;
    contact_phone = document.getElementById('phone').value;
    contact_email = document.getElementById('email').value;
    contact_city = document.getElementById('city').value;
    contact_address = document.getElementById('address').value;
    contact_image = document.getElementById('image').value;


    let infoarr = [contact_name, contact_lastname, contact_phone, contact_email, contact_city, contact_address];

    alert(infoarr);

    let flag = false;

    infoarr.forEach(elem =>
    {
        if(elem == '')
            flag = true;
    });

    if(flag)
    {
        alert("Please fill all empty spots!");
    }
    else
    {
        const code = CheckExisting(contact_name, contact_lastname, contact_phone);
        const validation = validator(contact_phone, contact_email);

        if(!flag)
        {
            if (validation == 0)
            {
                if (code == 3)
                {
                    accounts.push(
                    {
                        name: contact_name,
                        lastname: contact_lastname,
                        phone: contact_phone,
                        email: contact_email,
                        city: contact_city,
                        address: contact_address,
                        profilepiclink: contact_image
                    });

                    container.innerHTML = "";

                    let overlayElement = document.getElementById('screenoverlay');
                    overlayElement.innerHTML = '';

                    InfoContactClose();
                    create();

                }
                if (code == 1)
                {
                    alert("Name already used!");
                }
                if(code == 2)
                {
                    alert("Number already used!");
                }
            }
        }
    }
}


function validator(contact_phone,contact_email)
{
    const errorcount = 0;

    if(contact_phone == '' || contact_phone.toString().length != 10)
    {
        alert("Invalid phone number!");
        errorcount++;
    }

    if(!(contact_email.includes('@')) || contact_email == '')
    {
        alert("Invalid email!");
        errorcount++;
    }
    return errorcount;  
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
