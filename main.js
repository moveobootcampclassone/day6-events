const form = document.getElementById("myForm");
// OR:
//  const form = document.querySelector("#div");
const password = document.getElementById("password");
const message = document.getElementById("message123");

//Event Listeners

//adding "submit" event
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log(event); // you can see all the properties and methods
  console.log(document.getElementById("password").value);
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  alert(`Email: ${email}, this is your email`);
  console.log(`password: ${password}`);
});

//Event handler - submit

function handleSubmit(event) {
  event.preventDefault();
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  console.log(`Name: ${password}`);
  console.log(`Email: ${email}`);
  form.submit();
}

// ------------- Conditions --------------------------- //
//Event Listeners for validate password

//Password length between 1-8
// function validatePassword(password) {
//   return password.length > 0 && password.length <= 8;
// }

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const isValid = validatePassword(password.value);
//   console.log(isValid);
//   message.textContent = isValid ? "Valid password" : "Invalid password";
//   message.className = isValid ? "valid" : "invalid";
// });
