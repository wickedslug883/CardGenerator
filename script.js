const zoomedDiv = document.querySelector('.header');
let mouseX = 0;
let mouseY = 0;
let isHovering = false;

zoomedDiv.addEventListener('mouseover', () => {
  isHovering = true;
});

zoomedDiv.addEventListener('mouseout', () => {
  isHovering = false;
});

zoomedDiv.addEventListener('mousemove', (event) => {
  if (isHovering) {
    const rect = zoomedDiv.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
    moveZoomedBackground();
  }
});

function moveZoomedBackground() {
  const bgPositionX = -mouseX * 2; // Adjust the multiplier to control the movement speed
  const bgPositionY = -mouseY * 2; // Adjust the multiplier to control the movement speed
  zoomedDiv.style.backgroundPosition = `${bgPositionX}px ${bgPositionY}px`;
}

  const square1 = document.getElementById('mainImage');
 const square2 = document.getElementById('backImage');


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
// Get all the buttons inside the "tools" div
const buttons = document.querySelectorAll('#tools button');

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove the "active-button" class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove('active-button');
    });

    // Add the "active-button" class to the clicked button
    button.classList.add('active-button');
  });
});

let canvasContainer = document.querySelector('#canvas-container');

let canvases = [document.querySelector('#layer0')];
let contexts = [canvases[0].getContext('2d')];
let currentLayer = 0;
let canvas = canvases[currentLayer];
let context = contexts[currentLayer];
canvases.forEach(canvas => {
    canvas.style.width = '100%';
    canvas.style.height = '100%' ;
  });
  let scale = 1;

  // Set the canvas dimensions based on the parent element's size
  function setCanvasSize() {
    canvas.width = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;
  }
   // Call the setCanvasSize function initially and whenever the window is resized
setCanvasSize();
window.addEventListener('resize', setCanvasSize);
  // Add a wheel event listener to the canvas container
  canvasContainer.addEventListener('wheel', handleZoom);
  
  function handleZoom(event) {
    event.preventDefault();
  
    // Get mouse position relative to the canvas container
    const mouseX = event.clientX - canvasContainer.offsetLeft;
    const mouseY = event.clientY - canvasContainer.offsetTop;
  
    // Calculate the new scale based on the scroll direction
    const zoomFactor = 1.1;
    const newScale = event.deltaY < 0 ? scale * zoomFactor : scale / zoomFactor;
  
    // Limit the zoom level to reasonable values
    scale = Math.min(Math.max(newScale, 0.5), 3);
  
    // Adjust the origin point based on the zoom
    originx = mouseX / scale + originx - mouseX / newScale;
    originy = mouseY / scale + originy - mouseY / newScale;
  
    // Apply the scale and origin transformation to the canvas
    canvas.style.transform = `scale(${scale})`;
    canvas.style.transformOrigin = `${originx}px ${originy}px`;
  }
  
  
  // On mouse down we start panning
  canvas.onmousedown = function(event) {
    var startPosX = event.clientX;
    var startPosY = event.clientY;
    
    canvas.onmousemove = function(event) {
      var dx = event.clientX - startPosX;
      var dy = event.clientY - startPosY;
      
      originx -= dx / scale;
      originy -= dy / scale;
      
      startPosX = event.clientX;
      startPosY = event.clientY;
    }
  };
  
  // On mouse up we stop panning
  canvas.onmouseup = canvas.onmouseout = function() {
    canvas.onmousemove = null;
  };
  
let pencilColorPicker = document.querySelector('#pencilColorPicker');
let fillColorPicker = document.querySelector('#fillColorPicker');
let brushSize = document.querySelector('#brushSize');
let currentTool = null;
let currentShape = null;
let currentBrush = 'pencil';


let undoStack = [];
let redoStack = [];


canvases.forEach(canvas => {
    canvas.addEventListener('mousedown', handleDraw);
  });
document.querySelector('#pencil').addEventListener('click', () => currentTool = 'pencil');
document.querySelector('#eraser').addEventListener('click', () => currentTool = 'eraser');
document.querySelector('#fill').addEventListener('click', () => currentTool = 'fill');

document.querySelector('#undo').addEventListener('click', handleUndo);
document.querySelector('#redo').addEventListener('click', handleRedo);
document.querySelector('#rectangle').addEventListener('click', () => {
    currentTool = 'shape';
    currentShape = 'rectangle';
});

document.querySelector('#circle').addEventListener('click', () => {
    currentTool = 'shape';
    currentShape = 'circle';
});
document.querySelector('#toggle-layer0').addEventListener('click', () => {
    if (canvases[0].style.display !== 'none') {
        canvases[0].style.display = 'none';
    } else {
        canvases[0].style.display = 'block';
    }
});
document.querySelector('#move-up0').addEventListener('click', () => moveLayer(0, 'up'));
document.querySelector('#move-down0').addEventListener('click', () => moveLayer(0, 'down'));

function handleDraw(event) {
    const context = contexts[currentLayer];
    if (currentTool === 'fill') {
   let x = event.clientX - canvases[currentLayer].getBoundingClientRect().left;
        let y = event.clientY - canvases[currentLayer].getBoundingClientRect().top;
        let imageData = context.getImageData(0, 0, canvases[currentLayer].width, canvases[currentLayer].height);
        context.fillStyle = fillColorPicker.value;
        floodFill(x, y, imageData, context.getImageData(x, y, 1, 1).data);
    } else if (currentTool === 'text') {
        const text = document.querySelector('#textInput').value;
        if (text !== '') {
            const context = contexts[currentLayer];
            context.font = '16px Arial';
            context.fillText(text, event.clientX - canvases[currentLayer].getBoundingClientRect().left, 
                event.clientY - canvases[currentLayer].getBoundingClientRect().top);
        }
    } else if (currentTool === 'shape') {
        const context = contexts[currentLayer];
    
        // Get starting coordinates
        let startX = event.clientX - canvases[currentLayer].getBoundingClientRect().left;
        let startY = event.clientY - canvases[currentLayer].getBoundingClientRect().top;
    
        // Listen for mouse movement
        canvases[currentLayer].addEventListener('mousemove', drawShape);
    
        // Stop drawing shape when mouse is released
        canvases[currentLayer].addEventListener('mouseup', () => {
            canvases[currentLayer].removeEventListener('mousemove', drawShape);
            addStateToUndoStack();
        });
    
        function drawShape(e) {
            // Get current coordinates
            let currX = e.clientX - canvases[currentLayer].getBoundingClientRect().left;
            let currY = e.clientY - canvases[currentLayer].getBoundingClientRect().top;
    
            // Clear any previously drawn shape preview by restoring last state
            context.putImageData(undoStack[undoStack.length-1], 0, 0);
    
            if (context) {
                context.lineWidth = brushSize.value;
            context.strokeStyle = pencilColorPicker.value;
            context.fillStyle = fillColorPicker.value;
             } else {
                console.error('Context is undefined for layer: ', currentLayer);
            }
            if (currentShape === 'rectangle') {
                context.beginPath();
                context.rect(startX, startY, currX - startX, currY - startY);
                context.stroke();
                context.fill();
            } else if (currentShape === 'circle') {
                context.beginPath();
                let radius = Math.sqrt(Math.pow(currX - startX, 2) + Math.pow(currY - startY, 2));
                context.arc(startX, startY, radius, 0, Math.PI * 2);
                context.stroke();
                context.fill();
            }
            
        }} else {
            context.lineWidth = brushSize.value;
            context.lineCap = 'round';
            if (currentTool === 'pencil') {
                context.strokeStyle = pencilColorPicker.value;
                context.globalCompositeOperation = 'source-over';
            } else if (currentTool === 'eraser') {
                context.globalCompositeOperation = 'destination-out';
            }
            context.beginPath();
            context.moveTo(event.clientX - canvases[currentLayer].getBoundingClientRect().left, 
                           event.clientY - canvases[currentLayer].getBoundingClientRect().top);
            canvases[currentLayer].addEventListener('mousemove', draw);
            canvases[currentLayer].addEventListener('mouseup', stopDrawing);
        }
        addStateToUndoStack();
    }

    function draw(event) {
        const context = contexts[currentLayer];
        
        if (currentBrush === 'pencil') {
            context.lineTo(event.clientX - canvases[currentLayer].getBoundingClientRect().left, 
                           event.clientY - canvases[currentLayer].getBoundingClientRect().top);
            context.stroke();
        } else if (currentBrush === 'spray') {
            for (let i = 0; i < 10; i++) {  // Adjust this number to control the density of the spray
                let offsetX = Math.random() * 10 - 5;  // Adjust these values to control the spread of the spray
                let offsetY = Math.random() * 10 - 5;
                context.fillRect(event.clientX - canvases[currentLayer].getBoundingClientRect().left + offsetX, 
                                 event.clientY - canvases[currentLayer].getBoundingClientRect().top + offsetY, 1, 1);
            }
        } else if (currentBrush === 'pattern') {
            if (!pattern) {
                let img = new Image();
                img.crossOrigin = "Anonymous"; // This tells the browser to request cross-origin access when getting the image

                img.onload = function() {
                    pattern = context.createPattern(img, 'repeat');
                    context.fillStyle = pattern;
                    context.fillRect(event.clientX - canvases[currentLayer].getBoundingClientRect().left, 
                                     event.clientY - canvases[currentLayer].getBoundingClientRect().top, brushSize.value, brushSize.value);
                };
                img.src = 'pattern.png';  // Replace this with the URL of your pattern image
            } else {
                context.fillStyle = pattern;
                context.fillRect(event.clientX - canvases[currentLayer].getBoundingClientRect().left, 
                                 event.clientY - canvases[currentLayer].getBoundingClientRect().top, brushSize.value, brushSize.value);
            }
        }
    }
    

function stopDrawing() {
    canvases[currentLayer].removeEventListener('mousemove', draw);
    canvases[currentLayer].removeEventListener('mouseup', stopDrawing);
}
function matchStartColor(imageData, pixelPos, startColor) {
    var r = imageData.data[pixelPos];
    var g = imageData.data[pixelPos+1];
    var b = imageData.data[pixelPos+2];

    return (r === startColor[0] && g === startColor[1] && b === startColor[2]);
}

function colorPixel(imageData, pixelPos, fillColor) {
    imageData.data[pixelPos] = fillColor[0];
    imageData.data[pixelPos+1] = fillColor[1];
    imageData.data[pixelPos+2] = fillColor[2];
    imageData.data[pixelPos+3] = 255;  // Full alpha
}
function floodFill(startX, startY, imageData, startColor) {

    var newPos;
    var x;
    var y;
    var pixelPos;
    var reachLeft;
    var reachRight;
    var drawingStack = [[startX, startY]];
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : null;
    }
    
    var fillColor = hexToRgb(fillColorPicker.value);
    
    while (drawingStack.length) {
        newPos = drawingStack.pop();
        x = newPos[0];
        y = newPos[1];

        // Get current pixel position
        pixelPos = (y*canvases[currentLayer].width + x) * 4;

        // Go up as long as the color matches and are inside the canvas
        while (y >= 0 && matchStartColor(imageData, pixelPos, startColor)) {
            y -= 1;
            pixelPos -= canvases[currentLayer].width * 4;
        }

        pixelPos += canvases[currentLayer].width * 4;
        y += 1;
        reachLeft = false;
        reachRight = false;

        // Go down as long as the color matches and in inside the canvas
        while (y <= canvases[currentLayer].height && matchStartColor(imageData, pixelPos, startColor)) {
            y += 1;

            colorPixel(imageData, pixelPos, fillColor);

            if (x > 0) {
                if (matchStartColor(imageData, pixelPos - 4, startColor)) {
                    if (!reachLeft) {
                        // Add pixel to stack
                        drawingStack.push([x - 1, y]);
                        reachLeft = true;
                    }
                } else if (reachLeft) {
                    reachLeft = false;
                }
            }

            if (x < canvases[currentLayer].width) {
                if (matchStartColor(imageData, pixelPos + 4, startColor)) {
                    if (!reachRight) {
                        // Add pixel to stack
                        drawingStack.push([x + 1, y]);
                        reachRight = true;
                    }
                } else if (reachRight) {
                    reachRight = false;
                }
            }

            pixelPos += canvases[currentLayer].width * 4;
        }
    }

    contexts[currentLayer].putImageData(imageData, 0, 0);
}


// ... previous code ...

function addStateToUndoStack() {
    try {
        let imageData = contexts[currentLayer].getImageData(0, 0, canvases[currentLayer].width, canvases[currentLayer].height);
        undoStack.push(imageData);
        if (undoStack.length > 50) undoStack.shift();  // limit undo stack
        redoStack = [];  // reset redo stack
    } catch (error) {
        if (error instanceof DOMException) {
            console.error('Failed to execute getImageData due to cross-origin data. Please ensure that all images loaded in the canvas are from the same origin, or use CORS headers to allow cross-origin access.');
        } else {
            throw error;
        }
    }
}

// ... previous code ...

// HTML to Canvas Feature
document.querySelector('#html-to-canvas').addEventListener('click', () => {
    let html = document.querySelector('#htmlInput').value;
    let dataUri = "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000">
        <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">
        ${html}
        </div>
        </foreignObject>
        </svg>`);

    let img = new Image();
    img.onload = () => {
        contexts[currentLayer].drawImage(img, 0, 0);
        addStateToUndoStack();
    }
    img.src = dataUri;
});


function handleUndo() {
    if (undoStack.length > 1) {  // ensure there is something to undo
        redoStack.push(undoStack.pop());
        contexts[currentLayer].putImageData(undoStack[undoStack.length-1], 0, 0);
    }
}

function handleRedo() {
    if (redoStack.length) {
        undoStack.push(redoStack.pop());
        contexts[currentLayer].putImageData(undoStack[undoStack.length-1], 0, 0);
    }
}



// Create new layer
document.querySelector('#new-layer').addEventListener('click', () => {
    const newCanvas = document.createElement('canvas');
    newCanvas.style.position = 'absolute'; // Stack on top of previous layer
    newCanvas.width = canvases[0].width;
    newCanvas.height = canvases[0].height;
    newCanvas.id = `layer${canvases.length}`;
    newCanvas.addEventListener('mousedown', handleDraw);
    newCanvas.addEventListener('click', () => selectLayer(canvases.indexOf(newCanvas))); // Select layer on click
    canvasContainer.appendChild(newCanvas);
    canvases.push(newCanvas);
    contexts.push(newCanvas.getContext('2d'));
    selectLayer(canvases.length - 1);
  });
  
  // Delete layer
  document.querySelector('#delete-layer').addEventListener('click', () => {
    if (canvases.length > 1) {
      canvases[currentLayer].remove();
      canvases.splice(currentLayer, 1);
      contexts.splice(currentLayer, 1);
      undoStack.splice(currentLayer, 1);
      redoStack.splice(currentLayer, 1);
      selectLayer(Math.max(currentLayer - 1, 0));
    }
  });
  
  // Select layer
  function selectLayer(index) {
    if (canvases[currentLayer]) {
      canvases[currentLayer].style.zIndex = '0';
      canvases[currentLayer].classList.remove('active');
    }
    currentLayer = index;
    if (canvases[currentLayer]) {
      canvases[currentLayer].style.zIndex = '1'; // Bring to front
      canvases[currentLayer].classList.add('active');
    }
  }
  
  selectLayer(0);
  
  function moveLayer(index, direction) {
    let zIndex = parseInt(canvases[index].style.zIndex);
    
    if (direction === 'up') {
        canvases[index].style.zIndex = zIndex + 1;
    } else if (direction === 'down') {
        if (zIndex > 0) {
            canvases[index].style.zIndex = zIndex - 1;
        }
    }
}
document.querySelector('#save').addEventListener('click', handleSave);

function handleSave() {
  // Create a temporary link element
  const link = document.createElement('a');

  // Set the link's href attribute to the data URL of the canvas image
  link.href = canvases[currentLayer].toDataURL();

  // Set the download attribute to specify the default filename
  link.download = 'canvas.png';

  // Simulate a click on the link element to trigger the download
  link.click();
}
// Get the miniBox and megaBox elements
const miniBox = document.querySelector('.miniBox');
const megaBox = document.querySelector('.megaBox');

// Swap the content when the "Swap" option is clicked
document.getElementById('navItem3').addEventListener('click', () => {
      // Reset the scale and origin back to their initial values
      scale = 1;
      originx = 0;
      originy = 0;
    
      // Restyle the canvas to remove any transformations
      canvases.forEach(canvas => {
          canvas.style.transform = 'scale(1)';
          canvas.style.transformOrigin = '0 0';
      });

    // Create temporary elements to hold the content
    const tempMiniBox = document.createElement('div');
    const tempMegaBox = document.createElement('div');
  
    // Move the content from miniBox to temporary megaBox
    while (miniBox.firstChild) {
      tempMegaBox.appendChild(miniBox.firstChild);
    }
  
    // Move the content from megaBox to temporary miniBox
    while (megaBox.firstChild) {
      tempMiniBox.appendChild(megaBox.firstChild);
    }
  
    // Move the content from temporary miniBox to miniBox
    while (tempMiniBox.firstChild) {
      miniBox.appendChild(tempMiniBox.firstChild);
    }
  
    // Move the content from temporary megaBox to megaBox
    while (tempMegaBox.firstChild) {
      megaBox.appendChild(tempMegaBox.firstChild);
    }
    const canvasImages = canvases.map(canvas => {
      const image = new Image();
      image.src = canvas.toDataURL();
      return image;
    });
  // Reset the canvas container's size
setCanvasSize();
canvasImages.forEach((image, i) => {
  image.onload = () => {
    canvases[i].getContext('2d').drawImage(image, 0, 0);
  };
});

    // Check if .optionText is in miniBox and change font size
    const optionTextElements = miniBox.querySelectorAll('.optionText');
    optionTextElements.forEach((element) => {
      element.style.fontSize = 'initial';
    });
  
    // Check if .optionText is in megaBox and change font size
    const optionTextElementsMega = megaBox.querySelectorAll('.optionText');
    optionTextElementsMega.forEach((element) => {
      element.style.fontSize = 'xx-large';
    });
  });
  document.getElementById('btn-upload').addEventListener('click', function() {
    // Show the .webp
    document.getElementById('upload-gif').src = '04-11-18-929_512.webp';

    // Show the popup
    document.getElementById('popup').style.display = 'block';

    // Hide the popup and .webp after 2 seconds
    setTimeout(function() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('upload-gif').src = '';
    }, 2000);
});
