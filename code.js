'use strict'



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
