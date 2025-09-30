// Functionality for the About Me Tabs (Skills, Experience, Education)
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove 'active-link' from all links
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    // Remove 'active-tab' from all content
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // Add 'active-link' to the clicked link
    event.currentTarget.classList.add("active-link");
    // Show the corresponding content
    document.getElementById(tabname).classList.add("active-tab");
}


// Functionality for the Mobile Navigation Menu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    // This moves the menu on-screen (check style.css @media query)
    sidemenu.style.right = "0"; 
}

function closemenu() {
    // This moves the menu off-screen
    sidemenu.style.right = "-200px"; 
}

// Optional: Contact Form Submission to Google Sheets
/* This code is used to submit form data without a backend server.
You will need to set up a Google Sheet and get the link for the web app deployment.
*/

const scriptURL = 'https://script.google.com/macros/s/AKfycby1kabHbIwAPXiVlxAVOURkC7f0LBwksWt_Y-hCC3McJrTQeZT8CC5qQGhhvFYu4n0noA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully!"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})