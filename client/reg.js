const cont = document.querySelector("button");

cont.addEventListener("click", async () => {
  const username = document.querySelector(".username").value;
  const email = document.querySelector(".email").value;
  const phone = document.querySelector(".phone").value;
  const pwd = document.querySelector(".pwd").value;

  const obj = { username, email, phone, pwd };

  const response = await fetch("http://localhost:3000/user/reg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const json = await response.json();
  console.log(json);
});
