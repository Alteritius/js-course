const input = document.getElementById("pass");
const div = document.querySelector(".message");

const passwords = ["user", "wiosna", "Ania"];
const messages = [
  "wyjechałam na zawsze",
  "piękna pora roku",
  "fajny styl masz",
];

input.addEventListener("keyup", (e) => {
  //   console.log(e.target.value);
  //   console.log(this.value);
  // console.log(e.target);
  //   console.log(this);

  div.textContent = "";

  const text = e.target.value;
  //   console.log(text);
  passwords.forEach((password, index) => {
    // console.log(password, index);
    if (password === text) {
      console.log(password, index);
      div.textContent = messages[index];
      e.target.value = "";
    } else {
    }
  });
});

input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
});

// dla wersji 1, z jednym hasłem:

//   if (password === e.target.value) {
//     div.textContent = message;
//   } else {
//     div.textContent = "";
//   }
