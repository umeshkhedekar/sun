const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

/*----typing */
const dynamicText = document.querySelector("h3 span");
const words = ["Fullstack devloper  ", "Web design", "Website devlopment ", "App development"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    var email = document.getElementById('AAA').value.trim();
    
    if (email === '') {
        alert('Please enter your email address.');
        return;
    }

    // Display alert with submitted email
    alert('Submitted successfully with email: ' + email);

    // Reset the form after alert
    document.getElementById('my').reset();
}


 /*--=========== Login =======-- */
 function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Basic validation (you should use a more secure method in a real application)
    if (username === "umesh8080" && password === "umesh@8080") {
        alert("Login successful!");

        window.location.href = 'mo.html';
    } else {
        alert("Invalid username or password. Please try again.");
    }
    document.getElementById("loginForm").reset();
}

 /*---------- call requst page --------*/

 function showAlert() {
    var emailValue = document.getElementById('inputname').value;
    alert('Hello Wellcome to Website Planet :: '+ emailValue);

    document.getElementById("ds").reset();
  }
  