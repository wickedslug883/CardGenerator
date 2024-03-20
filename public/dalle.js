const backendURL = "http://localhost:3007";
const headers = {
  "Bypass-Tunnel-Reminder": "go",
  mode: "no-cors",
};

function checkIfValidBackend(url) {
  return fetch(url, { headers, method: "GET", timeout: 5000 })
    .then((response) => response.ok)
    .catch(() => false);
}

function callDalle(url, text, numImages = 1) {
  const data = { text, num_images: numImages };
  return fetch(url + "/dalle", {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error("Failed to call DALL·E API");
  });
}

function createAndShowImages(text, numImages) {
  checkIfValidBackend(backendURL)
    .then((valid) => {
      if (!valid) {
        console.log("Backend service is not running");
      } else {
        callDalle(backendURL, text, numImages)
          .then((response) => response.json())
          .then((data) => {
            data.forEach((imageData) => {
              const img = new Image();
              img.src = "data:image/jpeg;base64," + imageData;
              document.body.appendChild(img);
            });
          })
          .catch((error) => {
            console.error("Failed to generate images", error);
          });
      }
    })
    .catch((error) => {
      console.error("Failed to check backend", error);
    });
}

// Example usage
const textInput = prompt("What should I create?");
const numImagesInput = prompt("How many images?");
createAndShowImages(textInput, parseInt(numImagesInput));
