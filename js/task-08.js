const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (formElements.email.value === "" || formElements.password.value === "") {
      return alert("All fields must be filled!");
    }

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    }

    console.log(formData);
    form.reset();
}