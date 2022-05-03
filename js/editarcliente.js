import { getById, update } from "./API.js";
import { showMessage, validateForm } from "./funciones.js";

(function () {
  const form = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", async () => {
    const paramsUrl = new URLSearchParams(window.location.search);
    const id = paramsUrl.get("id");
    await getClientById(id);
  });

  async function getClientById(id) {
    await getById(id)
      .then((client) => {
        const { name, email, phone, company, id } = client;

        document.querySelector("#nombre").value = name;
        document.querySelector("#email").value = email;
        document.querySelector("#telefono").value = phone;
        document.querySelector("#empresa").value = company;
        document.querySelector("#id").value = id;
      })
      .catch((error) => console.log(error));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#telefono").value;
    const company = document.querySelector("#empresa").value;
    const id = document.querySelector("#id").value;

    const data = {
      name,
      email,
      phone,
      company,
    };

    if (validateForm(data)) {
      update(id, data);
      return;
    }

    showMessage("All fields are required!");
  });
})();
