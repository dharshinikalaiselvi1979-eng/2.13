// small change
const API = "http://localhost:3000"; // change later to Render URL

const form = document.getElementById("form");
const list = document.getElementById("list");

async function fetchItems() {
  const res = await fetch(`${API}/items`);
  const data = await res.json();

  list.innerHTML = "";

  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <b>${item.exercise}</b>
      <p>${item.weight} kg × ${item.reps}</p>
      <p>${item.date}</p>

      <button onclick="deleteItem(${item.id})">Delete</button>
      <button onclick="updateItem(${item.id})">Edit</button>
    `;

    list.appendChild(div);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const body = {
    exercise: exercise.value,
    weight: weight.value,
    reps: reps.value,
    date: date.value
  };

  await fetch(`${API}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  form.reset();
  fetchItems();
});

async function deleteItem(id) {
  await fetch(`${API}/items/${id}`, { method: "DELETE" });
  fetchItems();
}

async function updateItem(id) {
  const exercise = prompt("New exercise");
  const weight = prompt("New weight");
  const reps = prompt("New reps");
  const date = prompt("New date");

  await fetch(`${API}/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ exercise, weight, reps, date })
  });

  fetchItems();
}

fetchItems();