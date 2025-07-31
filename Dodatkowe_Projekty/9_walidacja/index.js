console.log('witaj świecie');

document
  .getElementById('validationForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    // Sprawdzenie adresu email 12sdSA-_.@weq.wqe.pl

    //chcemy '.' kropkę, więc trzeba użyć backslasha żeby silnik wiedział że to kropka a nie dowolny znak
    //daje duże litery na końcu, bo z perspektywy maila duże litery nie mają znczenia, więc powinniśmy je wziąć pod uwagę

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert('nieprawidłowy adres email');
      return;
    }

    //Sprawdzenie numeru telefonu (9 cyfr, możliwość odstępów co trzy cyfry)

    const phoneRegex = /^(\d{3}\s?){2}\d{3}$/;
    if (!phoneRegex.test(phone)) {
      alert('nieprawidłowy nr telefonu');
      return;
    }

    //sprawdzenie hasła 8-20 znaków, jedna cyfra conajmniej, conamniej jedną wielką literę
    //pierwszy warunek - sprawdź wsyzstkie znaki i czy jest tam liczba
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,20}$/;
    if (!passwordRegex.test(password)) {
      alert('nieprawidłowe hasło');
      return;
    } else {
      alert('Formularz wysłany');
    }
  });
