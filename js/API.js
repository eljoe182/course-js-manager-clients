const url = "http://localhost:3000/clients";

export const getAll = async () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const store = async (data) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => console.log(error));
  window.location.href = "index.html";
};

export const getById = async (id) => {
  return fetch(`${url}/${id}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const update = async (id, data) => {
  await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  window.location.href = "index.html";
};

export const destroy = async (id) => {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  window.location.href = "index.html";
};
