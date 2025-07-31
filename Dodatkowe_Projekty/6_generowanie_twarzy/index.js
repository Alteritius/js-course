// async function getFace() {}
const getFace = async (e) => {
  e.preventDefault();
  const gender = document.getElementById('gender').value;
  const ethnicity = document.getElementById('ethnicity').value;
  const age = document.getElementById('age').value;

  const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '55344adb9fmshddf45e1c1ec58bbp127db3jsnbb2b6d53f700',
      'x-rapidapi-host': 'face-studio.p.rapidapi.com',
    },
  };

  // asynchroniczność
  //fetch
  //promise
  //async await

  //wysyłamy żądanie - czekamy
  //dostaliśmy odpowiedź
  //przerabiamy odpowiedź
  //coś robimy z odp

  try {
    const response = await fetch(url, options);
    const result = await response.blob();
    const image = URL.createObjectURL(result);
    const imageDOM = document.createElement('img');
    const parDOM = document.createElement('p');
    parDOM.textContent = url;
    imageDOM.src = image;
    document.body.appendChild(parDOM);
    document.body.appendChild(imageDOM);
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
};

document.querySelector('#form').addEventListener('submit', getFace);
// getFace();
