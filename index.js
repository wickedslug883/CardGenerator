const square1 = document.querySelector('.square1');
 const square2 = document.querySelector('.square2');


 square1.addEventListener('click', () => {
  fileInput1.click();
});
square2.addEventListener('click', () => {
  fileInput2.click();
  
});
const fileInput1 = document.querySelector("#file-input-1");
      const imagePreview1 = document.querySelector(".mainArt");
      const fileInput2 = document.querySelector("#file-input-2");
      const imagePreview2 = document.querySelector(".card");

      fileInput1.addEventListener("change", function () {
        const file = fileInput1.files[0];
        if (file) {
          const reader = new FileReader();
          reader.addEventListener("load", function () {
            imagePreview1.innerHTML = `<img src="${reader.result}" alt="Image Preview">`;
          });
          reader.readAsDataURL(file);
        }
      });

      fileInput2.addEventListener("change", function () {
        const file = fileInput2.files[0];
        if (file) {
          const reader = new FileReader();
          reader.addEventListener("load", function () {
            imagePreview2.style.backgroundImage = `url(${reader.result})`;
          });
          reader.readAsDataURL(file);
        }     imagePreview2.style.width = "500px";
imagePreview2.style.height = "650px";
      });
 
      const imageDropdown = document.querySelector(".ddmMana");
const imageButton = document.querySelector("#image-button");
const imageList = document.querySelector("#image-list");

// Show/hide the dropdown menu when the button is clicked
imageButton.addEventListener("click", function() {
  imageList.style.display = imageList.style.display === "block" ? "none" : "block";
});

// Set the background image of the select image button when an option is clicked
imageList.addEventListener("click", function(event) {
  const target = event.target;
  if (target.nodeName === "LI") {
    const imageUrl = target.dataset.image;
    imageButton.style.backgroundImage = `url(${imageUrl})`;
    imageButton.textContent = "";
    imageList.style.display = "none";
  }
});

// text enter to print on card
var nameBox = document.getElementById('name-box');
var typeBox = document.getElementById('type-box');
var descriptionBox = document.getElementById('description-box');
var nameText = document.getElementById('name-style');
var typeText = document.getElementById('type-style');
var descriptionText = document.getElementById('description-style')

function showInputText() {
  nameText.innerHTML = nameBox.value;
  nameBox.style.display = 'none';
  nameText.style.display = 'inline-block';
  
}
function showInputText2() {
  typeText.innerHTML = typeBox.value;
  typeBox.style.display = 'none'; 
  typeText.style.display = 'inline-block';
}

function showInputText3 () {
   descriptionText.innerHTML = descriptionBox.value;
     descriptionBox.style.display = 'none';
     descriptionText.style.display = 'inline-block';
}



function editInputText() {
  nameBox.value = nameText.innerHTML;
  nameBox.style.display = 'inline-block';
  nameText.style.display = 'none';
  nameBox.focus();
}
function editInputText2 () {
  typeBox.value = typeText.innerHTML; 
   typeBox.style.display = 'inline-block'; 
    typeText.style.display = 'none'; 
     typeBox.focus();
}

function editInputText3 () {
   descriptionBox.value = descriptionText.innerHTML;
    descriptionBox.style.display = 'inline-block'; 
     descriptionText.style.display = 'none';
     descriptionBox.focus();
}
const downloadButton = document.querySelector('.btn-download');
const card = document.querySelector('.card');

downloadButton.addEventListener('click', () => {
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'card.png';
    link.href = canvas.toDataURL('image/png').replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    link.click();
  });
});

function showDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}


function setFont1(font) {
 
  nameBox.style.fontFamily = font;
  nameText.style.fontFamily = font;

 
}

function setFont2(font) {

  typeBox.style.fontFamily = font;  
  typeText.style.fontFamily = font;
}

function setFont3(font) {

  descriptionBox.style.fontFamily = font; 
  descriptionText.style.fontFamily = font;
}

  const element = document.querySelector('.triangle ');

  function showOptions() {
    document.getElementById("options").style.display = "block";
  }
  
  function setOption(option) {
    var cardName = document.getElementById("card-name");
    if (option === "Creature") {
      cardName.value = "Creature - ";
      cardName.placeholder = "Creature - Name";
      document.getElementById("creatureP").style.display = "inline-block";
      document.getElementById("creature-power").style.display = "inline-block";
      document.getElementById("creature-toughness").style.display = "inline-block";
      document.getElementById("creatureDiv").style.display = "flex";
      document.getElementById("creature-power").value = "";
      document.getElementById("creature-toughness").value = "";
    } else {
      cardName.value = option + " - ";
      cardName.placeholder = option + " - Name";
      document.getElementById("creatureP").style.display = "none";
      document.getElementById("creature-power").style.display = "none";
      document.getElementById("creature-toughness").style.display = "none";
      document.getElementById("creatureDiv").style.display = "none";
    }
    cardName.focus();
    document.getElementById("options").style.display = "none";
  }
  
  document.getElementById("card-name").addEventListener("keydown", function(event) {
    if (event.key === "-") {
      var cardType = this.value.substring(0, this.selectionStart - 1);
      var cardName = this.value.substring(this.selectionStart);
      this.value = cardType.trim() + " - " + cardName.trim();
      this.setSelectionRange(cardType.length + 3, cardType.length + 3);
      event.preventDefault();
      if (cardType === "Creature") {
        document.getElementById("creature-power").style.display = "inline-block";
        document.getElementById("creature-toughness").style.display = "inline-block";
        document.getElementById("creatureP").style.display = "inline-block";
        document.getElementById("creatureDiv").style.display = "flex";
        document.getElementById("creature-power").focus();
      }
    } else if (this.selectionStart < this.value.indexOf("-")) {
      this.setSelectionRange(this.value.indexOf("-"), this.value.indexOf("-"));
      event.preventDefault();
    }
    if (event.key === "Enter") {
      var cardContainer = document.getElementById("card-container");
      cardContainer.style.display = 'flex'
      cardContainer.style.alignItems = 'center'
      cardContainer.style.border = '1px solid black'
      cardContainer.innerHTML += this.value + "<br>";
      this.value = "";
      document.getElementById("options").style.display = "none";
        document.getElementById("div1").style.display = "none";
      event.preventDefault();
    }
  });
  
  document.getElementById("card-name").addEventListener("click", function() {
    document.getElementById("options").style.display = "block";
  });
  

//   //MYSQL DATABASE
//   const mysql = require('mysql');
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// // Set up the database connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'yourpassword',
//   database: 'yourdatabase'
// });

// // Connect to the database
// connection.connect();

// // Set up the body parser middleware to parse JSON requests
// app.use(bodyParser.json());

// // Define the route to handle the card upload request
// app.post('/cards', (req, res) => {
//   const name = req.body.name;
//   const imageUrl = req.body.image_url;
//   const manaCost = req.body.mana_cost;
//   const type = req.body.type;
//   const description = req.body.description;

//   // Insert the card data into the database
//   const sql = `INSERT INTO cards (title, image_url, mana_cost, type, description)
//                VALUES (?, ?, ?, ?, ?)`;
//   connection.query(sql, [name, imageUrl, manaCost, type, description], (error, results, fields) => {
//     if (error) {
//       console.error(error);
//       res.sendStatus(500);
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// card.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent the form from submitting normally

//   // Extract the necessary data from the form
//   const name = document.querySelector('.name').value;
//   const imageUrl = document.querySelector('.ddmMana').getAttribute('data-image');
//   const manaCost = document.querySelector('.manaCost').value;
//   const type = document.querySelector('.type').value;
//   const description = document.querySelector('.description').value;

//   // Send a POST request to the server with the card data
//   fetch('/cards', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: name,
//       image_url: imageUrl,
//       mana_cost: manaCost,
//       type: type,
//       description: description
//     })
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     // Handle the server's response here, if necessary
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// });
// Get the form element


// Get the upload button element
const uploadBtn = document.querySelector('.btn-upload');
const successText = document.getElementById('successText');

uploadBtn.addEventListener('click', () => {
  saveCard();
  showSuccessText();
});

function saveCard() {
  const card = document.querySelector('.card');
  const bgImage = window.getComputedStyle(card).getPropertyValue('background-image');

  let cards = JSON.parse(localStorage.getItem('cards')) || [];
  cards.push({ html: card.innerHTML, bgImage: bgImage });
  localStorage.setItem('cards', JSON.stringify(cards));
}

function showSuccessText() {
  successText.style.opacity = 1;
  successText.textContent = 'Success!';
  setTimeout(() => {
    successText.style.opacity = 0;
    successText.textContent = '';
  }, 2000);
}

function typingAnimation(buttonElement, text, typingTextElement) {
  const typingInterval = 100; // Time interval for typing in milliseconds
  const deletingInterval = 50; // Time interval for deleting in milliseconds
  let typeTimeoutId;
  let deleteTimeoutId;
  let currentIndex = 0; // Add missing variable declaration

  function typingCore() {
    if (currentIndex < text.length) {
      typingTextElement.textContent += text[currentIndex];
      currentIndex++;
      typeTimeoutId = setTimeout(typingCore, typingInterval);
    } else {
      clearTimeout(typeTimeoutId);
      deleteTimeoutId = setTimeout(deleteText, 1000); // Wait for 1 second before deleting
    }
  }

  function deleteText() {
    if (currentIndex > 0) {
      typingTextElement.textContent = text.slice(0, currentIndex - 1);
      currentIndex--;
      deleteTimeoutId = setTimeout(deleteText, deletingInterval);
    } else {
      clearTimeout(deleteTimeoutId);
      typingTextElement.style.opacity = 0; // Hide the typing text when deleting is complete
    }
  }

  buttonElement.addEventListener('mouseleave', () => {
    clearTimeout(typeTimeoutId);
    deleteText();
  });

  buttonElement.addEventListener('mouseover', () => {
    clearTimeout(deleteTimeoutId);
    typingTextElement.style.opacity = 1;
    currentIndex = 0;
    typingCore();
  });
}

const typingText = document.getElementById('typingText');
const typingText2 = document.getElementById('typingText2');

typingAnimation(uploadBtn, 'upload', typingText);
typingAnimation(downloadButton, 'download', typingText2);
