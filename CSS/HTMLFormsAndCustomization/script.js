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
const phoneInput = document.getElementById("phone");
const passInput = document.getElementById("password");
const passCheckInput = document.getElementById("passwordCheck");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInputs();
});

function checkInputs() {
  checkName(nameInput);
  checkEmail(emailInput);
  checkPhone(phoneInput);
  checkPass(passInput);
  checkPassCheck(passInput, passCheckInput);
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

function checkName(nameInput) {
  const nameValue = nameInput.value.trim();
  nameValue
    ? setSuccessFor(nameInput)
    : setErrorFor(nameInput, "Name cannot be blank");
}
function checkEmail(emailInput) {
  const emailValue = emailInput.value.trim();
  emailValue
    ? isEmailRegex(emailValue)
      ? setSuccessFor(emailInput)
      : setErrorFor(emailInput, "Email is not valid")
    : setErrorFor(emailInput, "Email cannot be blank");
}
function checkPhone(phoneInput) {
  const phoneValue = phoneInput.value.trim();
  phoneValue
    ? isPhoneRegex(phoneValue)
      ? setSuccessFor(phoneInput)
      : setErrorFor(phoneInput, "Phone number is not valid")
    : setErrorFor(phoneInput, "Phone number cannot be blank");
}
function checkPass(passInput) {
  const passValue = passInput.value.trim();
  passValue
    ? setSuccessFor(passInput)
    : setErrorFor(passInput, "Password cannot be blank");
}
function checkPassCheck(passInput, passCheckInput) {
  const passValue = passInput.value.trim();
  const passCheckValue = passCheckInput.value.trim();
  passCheckValue
    ? passCheckValue === passValue
      ? setSuccessFor(passCheckInput)
      : setErrorFor(passCheckInput, "Passwords does not match")
    : setErrorFor(passCheckInput, "Password check cannot be blank");
}

function isEmailRegex(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function isPhoneRegex(phone) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
  return re.test(String(phone).toLowerCase());
}

/* JavaScript Form Validation onblur */
nameInput.addEventListener("blur", function () {
  checkName(this);
});
emailInput.addEventListener("blur", function () {
  checkEmail(this);
});
passInput.addEventListener("blur", function () {
  checkPass(this);
});
passCheckInput.addEventListener("blur", function () {
  checkPassCheck(passInput, passCheckInput);
});
phoneInput.addEventListener("blur", function () {
  checkPhone(this);
});
/* end of JavaScript Form Validation */
