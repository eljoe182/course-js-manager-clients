import { showMessage, validateForm } from "./funciones.js";
import { store } from "./API.js";

(function () {
  const form = document.querySelector("#formulario");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#telefono").value;
    const company = document.querySelector("#empresa").value;

    const data = {
      name,
      email,
      phone,
      company,
    };

    if (validateForm(data)) {
      store(data);
      return;
    }

    showMessage("All fields are required!");
  });
})();
