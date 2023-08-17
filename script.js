// script.js

// Get the button element
var button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Make an HTTP GET request to retrieve the user's IP address
  fetch("https://api.ipify.org?format=json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Extract the IP address from the response data
      var ipAddress = data.ip;

      // Display the IP address to the user
      alert("Your IP address is: " + ipAddress);
    })
    .catch(function (error) {
      console.log(error);
    });
});
