// console.log(localStorage);
// localStorage['id użytkownika'] = '1200';
// console.log(localStorage['id użytkownika']);

// localStorage.setItem('imię użytkownika', 'Miesio');

// let counter = 0; //lepiej datą, tak twierdzi chłop

function saveNote() {
  const textNote = document.querySelector('.note-area').value;
  const keyNote = Date.now().toString(); //pobranie obecnego czasu
  localStorage.setItem(keyNote, textNote);
  createNote(keyNote, textNote);
}

function deleteNote(keyNote) {
  document.getElementById(keyNote).remove();
  localStorage.removeItem(keyNote);
}

function createNote(keyNote, textNote) {
  const div = document.createElement('div');
  div.id = keyNote;
  div.className = 'note';
  div.textContent = textNote;
  //   const text = document.createTextNode(textNote);
  //   div.appendChild(text);

  const button = document.createElement('button');
  button.textContent = 'Delete';
  //   button.addEventListener('click', () => {deleteNote(keyNote);});
  button.className = 'btn-note-delete';
  button.onclick = () => {
    deleteNote(keyNote);
  };
  div.appendChild(button);
  document.querySelector('.notes').appendChild(div);
}

function init() {
  Object.keys(localStorage).forEach((keyNote) => {
    const textNote = localStorage.getItem(keyNote);
    createNote(keyNote, textNote);
  });
}

init();
