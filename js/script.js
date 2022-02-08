////////////////////
// Validação formulário
////////////////////

const validate = function (e) {
  e.preventDefault();
  const formContact = document.forms["form-contact"];
  const validPhone = formContact.elements[2].value.length >= 9;
  const email = formContact.elements[1].value;
  const validEmail =
    email.indexOf("@") > 0 && email.lastIndexOf(".") - email.indexOf("@") >= 2;
  if (validPhone && validEmail) {
    console.log("Formulário enviado!");
    document.getElementById("formContact").reset();
  }
  if (!validEmail && !validPhone) {
    formContact.elements[1].value = "";
    formContact.elements[1].placeholder = "E-MAIL INVÁLIDO";
    formContact.elements[2].value = "";
    formContact.elements[2].placeholder = "TELEFONE INVÁLIDO";
  }
  if (!validEmail) {
    formContact.elements[1].value = "";
    formContact.elements[1].placeholder = "E-MAIL INVÁLIDO";
  }
  if (!validPhone) {
    formContact.elements[2].value = "";
    formContact.elements[2].placeholder = "TELEFONE INVÁLIDO";
  }
};

document.getElementById("submit-contact").addEventListener("click", validate);

const validateHero = function (e) {
  e.preventDefault();
  const formContact = document.forms["form-contact-hero"];
  const validPhone = formContact.elements[2].value.length >= 9;
  const email = formContact.elements[1].value;
  const validEmail =
    email.indexOf("@") > 0 && email.lastIndexOf(".") - email.indexOf("@") >= 2;
  if (validPhone && validEmail) {
    console.log("Formulário enviado!");
    document.getElementById("formContact").reset();
  }
  if (!validEmail && !validPhone) {
    formContact.elements[1].value = "";
    formContact.elements[1].placeholder = "E-MAIL INVÁLIDO";
    formContact.elements[2].value = "";
    formContact.elements[2].placeholder = "TELEFONE INVÁLIDO";
  }
  if (!validEmail) {
    formContact.elements[1].value = "";
    formContact.elements[1].placeholder = "E-MAIL INVÁLIDO";
  }
  if (!validPhone) {
    formContact.elements[2].value = "";
    formContact.elements[2].placeholder = "TELEFONE INVÁLIDO";
  }
};

document
  .getElementById("submit-contact-hero")
  .addEventListener("click", validateHero);

const search = function (e) {
  e.preventDefault();
  console.log("Busca realizada!");
};

const searchBtns = document.querySelectorAll(".search-submit");
searchBtns.forEach((el) => {
  el.addEventListener("click", search);
});
