// Projekt 5 - Zadanie dla Ciebie
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];
const lowerCasePasswords = [];

for (let i = 0; i < passwords.length; i++) {
  lowerCasePasswords[i] = passwords[i].toLowerCase();
  //   console.log(lowerCasePasswords[i]);
}

const showMessage = (e) => {
  //tutaj rozwiązanie
  // PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)

  div.textContent = "";
  const text = e.target.value.toLowerCase();
  lowerCasePasswords.forEach((password, index) => {
    if (password === text) {
      div.textContent = messages[index];
    }
  });
};

input.addEventListener("input", showMessage);
