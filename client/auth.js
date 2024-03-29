const cont = document.querySelector("button");

cont.addEventListener("click", async () => {
  const email = document.querySelector(".email").value;
  const pwd = document.querySelector(".pwd").value;

  const obj = { email, pwd };

  const response = await fetch("http://localhost:3000/user/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const json = await response.json();
  console.log(json);
});
