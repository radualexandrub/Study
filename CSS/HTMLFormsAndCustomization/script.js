/* Custom Range Input - https://codepen.io/dsr/pen/rNLxBxw */
let rangeInput = document.querySelector(
  ".form__item--range-container .form__input"
);
let rangeValue = document.querySelector(
  ".form__item--range-container .form__range-value #rangeFruitLikenessDisplayValue"
);

let start = parseFloat(rangeInput.min);
let end = parseFloat(rangeInput.max);
let step = parseFloat(rangeInput.step);
rangeValue.innerHTML += "<div>" + start + "</div>";

for (let i = start; i <= end; i += step) {
  rangeValue.innerHTML += "<div>" + i + "</div>";
}

rangeInput.addEventListener("input", function () {
  let top = (parseFloat(rangeInput.value) / step) * -40;
  rangeValue.style.transform = `translateY(${top + "px"})`;
});
/* end of Custom Range Input */

/* Custom File Upload Button */
Array.prototype.forEach.call(
  document.querySelectorAll(".js-btnFileUpload"),
  function (button) {
    var hiddenInputFileUpload =
      button.parentElement.parentElement.querySelector(".js-inputFileUpload");
    var outputTextFileNames = button.parentElement.querySelector(
      ".js-outputTextFileNames"
    );
    var defaultLabelText = "No file(s) selected";

    outputTextFileNames.textContent = defaultLabelText;
    outputTextFileNames.title = defaultLabelText;

    button.addEventListener("click", function () {
      hiddenInputFileUpload.click();
    });
    hiddenInputFileUpload.addEventListener("change", function () {
      var filenameList = Array.prototype.map.call(
        hiddenInputFileUpload.files,
        function (file) {
          return file.name;
        }
      );
      outputTextFileNames.textContent =
        filenameList.join(", ") || defaultLabelText;
      outputTextFileNames.title = outputTextFileNames.textContent;
    });
  }
);
/* end of Custom File Upload Button */

/* JavaScript Form Validation on Submit */
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const passCheckInput = document.getElementById("passwordCheck");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInputs();
});
function checkInputs() {
  /* Get input values */
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passValue = passInput.value.trim();
  const passCheckValue = passCheckInput.value.trim();

  nameValue
    ? setSuccessFor(nameInput)
    : setErrorFor(nameInput, "Name cannot be blank");
  emailValue
    ? isEmail(emailValue)
      ? setSuccessFor(emailInput)
      : setErrorFor(emailInput, "Email is not valid")
    : setErrorFor(emailInput, "Email cannot be blank");
  passValue
    ? setSuccessFor(passInput)
    : setErrorFor(passInput, "Password cannot be blank");
  passCheckValue
    ? passCheckValue === passValue
      ? setSuccessFor(passCheckInput)
      : setErrorFor(passCheckInput, "Passwords does not match")
    : setErrorFor(passCheckInput, "Password check cannot be blank");
}
function setErrorFor(inputElement, message = "Error") {
  const formItem = inputElement.parentElement;
  formItem.className = "form__item error";
  formItem.querySelector("small").innerText = message;
}
function setSuccessFor(inputElement) {
  const formItem = inputElement.parentElement;
  formItem.className = "form__item success";
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
/* end of JavaScript Form Validation on Submit */
