const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  const div = document.querySelector("div");

  const response = await fetch("http://localhost:3000/user", {
    method: "GET",
  });

  const dataResponse = await response.json();

  dataResponse.forEach((el) => {
    const p = document.createElement("p");

    p.textContent = `${el.username} : ${el.email}`;

    div.appendChild(p);
  });
});
