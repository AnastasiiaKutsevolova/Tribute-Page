const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const submit = document.querySelector("#submit");

const form = {
    name: '',
    password: ''
};

nameInput.addEventListener('change', (e) => {
    const name = e.target.value;
    form.name = name.trim();
});

passwordInput.addEventListener('change', (e) => {
    const password = e.target.value
    form.password = password;
});

submit.addEventListener('click', (e) => {
    e.preventDefault();

    if(form.password === '') {
       const errField = document.querySelector('.error');
       errField.textContent = "Password is required";
    }

    console.log("form", form);
})


