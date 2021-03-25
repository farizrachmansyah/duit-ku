class UI {
  constructor() {
    this.loginForm = document.querySelector('.loginform');
  }

  animateForm(e) {
    const inputForm = e.parentElement.previousElementSibling;
    const fieldForm = inputForm.parentElement;
    const nextField = fieldForm.nextElementSibling;

    // Validation
    if (inputForm.type === "email" && this.validateEmail(inputForm)) {
      this.nextField(fieldForm, nextField);
    } else if (inputForm.type === "password" && this.validatePass(inputForm)) {
      this.nextField(fieldForm, nextField);
    } else {
      fieldForm.style.animation = "errorShake 0.15s";
    }

    // remove animation
    fieldForm.addEventListener("animationend", () => {
      fieldForm.style.animation = "";
    });
  }

  validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validation.test(email.value)) {
      this.error("#5aa787");
      return true;
    } else {
      this.error("#b33939");

    }
  }

  validatePass(pass) {
    if (pass.value.length < 8) {
      console.log("cant less than 8 character");
      this.error("#b33939");
    } else {
      this.error("#5aa787");
      return true;
    }
  }

  nextField(current, next) {
    current.classList.add('hide');
    current.classList.remove('show');
    next.classList.add('show');
  }

  error(color) {
    this.loginForm.style.backgroundColor = color;
  }
}

function eventListener() {
  const ui = new UI();

  // the buttons
  const submitBtn = document.querySelectorAll('.submit-btn');
  submitBtn.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      ui.animateForm(e.target);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  eventListener();
})