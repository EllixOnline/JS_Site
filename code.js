'use strict'

function preloadImages() {
    var images = ['Palm_Tree_BG_Main.png',
         'Palm_Tree_BG_Party1.png',
          'Palm_Tree_BG_Party2.png',
           'Palm_Tree_BG_Party3.png',
            'Palm_Tree_BG_Party4.png',
             'Palm_Tree_BG_Party5.png'];
    for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];
    }
}

document.getElementById("screenoverlay").addEventListener("click", function(e) {

    if (e.target.id === "screenoverlay") {
        InfoContactClose();
    }
});

const accounts = 
[
    {
     name: "Nikita",
     lastname: "Katsovich",
     phone: "0546850131",
     email: "ellixonline@gmail.com",
     city: "Haifa",
     address: "Yad La Banim 206" ,
     profilepiclink: "https://scontent.ftlv27-1.fna.fbcdn.net/v/t39.30808-6/454715446_10219141748894045_7533506083240458874_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dBG77gs9i4sQ7kNvgEJxnjU&_nc_ht=scontent.ftlv27-1.fna&oh=00_AYCIzsjw3zqGgJo5saZnrSdrQTd7cKAR_591b69DuBACCA&oe=66CBDABA"  
    },

    {
        name: "Amit",
        lastname: "Nosayev",
        phone: "0544883203",
        email: "abednosayev@gmail.com",
        city: "Or Akiva",
        address: "CityStreet 20" ,
        profilepiclink: "https://i.gyazo.com/36b37c34a47b2d7f02ca802132fed12c.jpg" 
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
                    <img <img src="${elem.profilepiclink}" alt="Description" class="hover-effect" onerror="this.onerror=null; this.src='./images/ProfilePicPlaceholder.jpg'">
                </div>
                <div class="contact_info">
                    <div>
                        <b><u>Name</u>:</b> ${elem.name} ${" "} ${elem.lastname} <br>
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
        if(elem.name.includes(search) || elem.phone.includes(search) || elem.lastname.includes(search))
        {
        content += `
        <div class="contact_div">
            <div class="contact_image">
                <img <img src="${elem.profilepiclink}" alt="Description" class="hover-effect" onerror="this.onerror=null; this.src='./images/ProfilePicPlaceholder.jpg'">
            </div>
            <div class="contact_info">
                <div>
                    <b><u>Name</u>:</b> ${elem.name} ${" "} ${elem.lastname} <br>
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
        <button onclick='InfoContactClose()'><img src='./images/Icons/x-mark.png'><button>
        </div>
        <div class='information'>
        <form>
            <label><b>Name:</b> ${accounts[index].name}</label><br>
            <label><b>Last Name:</b> ${accounts[index].lastname}</label><br>
            <label><b>Phone:</b> ${accounts[index].phone}</label><br>
            <label><b>Email:</b> ${accounts[index].email}</label><br>
            <label><b>Address:</b> ${accounts[index].city}<br>${accounts[index].address}</label>
        </form>
        <div class="pic">
        <img src='${accounts[index].profilepiclink}'>
        <div>
        </div>
        </div>
    `;

    overlayElement.appendChild(popupContent);
}

function InfoContactClose()
{
    let overlayElement = document.getElementById('screenoverlay');
    overlayElement.innerHTML = '';
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
        <button onclick='InfoContactClose()'><img src='./images/Icons/x-mark.png'><button>
        </div>
        <div class='information'>
        <form>
            <label>Name:</label><br>
            <input type="text" id="name" placeholder="First name"></input><br>
            <label>Last Name:</label><br>
            <input type="text" id="lastname" placeholder="Last name"></input><br>
            <label>Phone:</label><br>
            <input type="number" id="phone" placeholder="Phone number"></input><br>
            <label>Email:</label><br>
            <input type="text" id="email" placeholder="E-mail"></input><br>
            <label>City:</label><br>
            <input type="text" id="city" placeholder="City"></input><br>
            <label>Address:</label><br>
            <input type="text" id="address" placeholder="Address in the city"></input><br>
            <label>Image URL:<br>
            <input type="text" id="image" placeholder="Image to use as avatar's URL"></input><br>
        </form>
        <br>
        <button class="sendinfobutton" onclick="sendInfo()">Add</button>
        </div>
        </div>
    `;

    overlayElement.appendChild(popupContent);

    

}

function EditContact(index) {
    let overlayElement = document.getElementById('screenoverlay');
    overlayElement.classList.add('full-screen-overlay');
    overlayElement.classList.remove('hidden_class');
    let popupContent = document.createElement('div');
    popupContent.classList.add('popup_window');
    let acindex = index;
    popupContent.innerHTML = `
        <div class='infobox'>
        <div class='close'>
        <button onclick='InfoContactClose()'><img src='./images/Icons/x-mark.png'><button>
        </div>
        <div class='information'>
        <form>
            <label>Name:</label><br>
            <input type="text" id="name" placeholder="name" value='${accounts[index].name}'></input><br>
            <label>Last Name:</label><br>
            <input type="text" id="lastname" placeholder="last name" value='${accounts[index].lastname}'></input><br>
            <label>Phone:</label><br>
            <input type="number" id="phone" placeholder="phone" value='${accounts[index].phone}'></input><br>
            <label>Email:</label><br>
            <input type="text" id="email" placeholder="email" value='${accounts[index].email}'></input><br>
            <label>City:</label><br>
            <input type="text" id="city" placeholder="city" value='${accounts[index].city}'></input><br>
            <label>Address:</label><br>
            <input type="text" id="address" placeholder="address" value='${accounts[index].address}'></input><br>
            <label>Image URL:<br> 
            <input type="text" id="image" placeholder="URL of image to use as avatar" value='${accounts[index].profilepiclink}'></input><br>
        </form>
        <br>
        <button class="sendinfobutton" onclick="sendInfoEdit('${index}')">Change</button>
        </div>
        </div>
    `;

    overlayElement.appendChild(popupContent);

    

}

function CheckExisting(name,lastname,phone)
{
    let code = 3;
    accounts.forEach((elem, index) => 
    {
        if(elem.name.toLowerCase() == name.toLowerCase() && elem.lastname.toLowerCase() == lastname.toLowerCase())
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

function CheckExistingWithEdit(name,lastname,phone,indexofprofile)
{
    let code = 3;
    accounts.forEach((elem, index) => 
    {
        if(elem.name.toLowerCase() == name.toLowerCase() && elem.lastname.toLowerCase() == lastname.toLowerCase() && indexofprofile!= index)
            code = 1;
    });

    if(code == 3)
    {
    accounts.forEach((elem, index ) => 
        {
            if(elem.phone == phone && indexofprofile!= index)
                code = 2;
        });
    }

    return code;

}

function sendInfoEdit(accindex)
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

    contact_name = document.getElementById('name').value;
    contact_lastname = document.getElementById('lastname').value;
    contact_phone = document.getElementById('phone').value;
    contact_email = document.getElementById('email').value;
    contact_city = document.getElementById('city').value;
    contact_address = document.getElementById('address').value;
    contact_image = document.getElementById('image').value;


    let infoarr = [contact_name, contact_lastname, contact_phone, contact_email, contact_city, contact_address];
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
        if(contact_image== null || contact_image == '')
            contact_image = './images/ProfilePicPlaceholder.jpg';

        const code = CheckExistingWithEdit(contact_name, contact_lastname, contact_phone,accindex);
        const validation = validator(contact_phone, contact_email);

        if(!flag)
        {
            if (validation == 0)
            {
                if (code == 3)
                {
                    accounts[accindex] =
                    {
                        name: contact_name,
                        lastname: contact_lastname,
                        phone: contact_phone,
                        email: contact_email,
                        city: contact_city,
                        address: contact_address,
                        profilepiclink: contact_image
                    };

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

    contact_name = document.getElementById('name').value;
    contact_lastname = document.getElementById('lastname').value;
    contact_phone = document.getElementById('phone').value;
    contact_email = document.getElementById('email').value;
    contact_city = document.getElementById('city').value;
    contact_address = document.getElementById('address').value;
    contact_image = document.getElementById('image').value;


    let infoarr = [contact_name, contact_lastname, contact_phone, contact_email, contact_city, contact_address];
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
        if(contact_image== null || contact_image == '')
            contact_image = './images/ProfilePicPlaceholder.jpg';

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





function Party() {

    alert("Party time!");

    const images = [
        'url(./images/Palm_Tree_BG_Party1.png)',
        'url(./images/Palm_Tree_BG_Party2.png)',
        'url(./images/Palm_Tree_BG_Party3.png)',
        'url(./images/Palm_Tree_BG_Party4.png)',
        'url(./images/Palm_Tree_BG_Party5.png)',
        'url(./images/Palm_Tree_BG_Main.png)'
    ];

   
    let index = 0;
    const interval = setInterval(() => {
        document.body.style.backgroundImage = images[index];
        index++;

        if (index === images.length) {
            index = 0;
        }
    }, 500); 
    
}

