const votingForm = document.querySelector('.voting-form');
const voteOptions = document.querySelector('.vote-options');
const btnSubmit = document.querySelector('.submit-form');
const userName = document.querySelector('.user-name');
const userId = document.querySelector('.user-id');
const voteResults = document.querySelector('.vote-results');

const validUserIds = new Map([
  ['Romuś', '12345678'],
  ['Stasio', '11111111'],
  ['Barti', '12341234'],
  ['Dżastina', '00000001'],
]);

const voteCounts = new Map();
voteCounts.set('Opcja 1', 0);
voteCounts.set('Opcja 2', 0);
voteCounts.set('Opcja 3', 0);

// userzy, którzy ju zagłosowali
const votedUsers = new Set();

const voting = (e) => {
  e.preventDefault();
  //   console.log('głosowanie');
  const user = userName.value;
  const password = userId.value;
  const select = voteOptions.value;

  if (validUserIds.get(user) === password) {
    if (votedUsers.has(user)) {
      alert('Już głosowałeś');
    } else {
      //logika ważnego głosu
      votedUsers.add(user);
      voteCounts.set(select, voteCounts.get(select) + 1);
    }
  } else {
    alert('nieprawidłowe dane');
  }

  updateResults();
};

const updateResults = () => {
  let output = '';
  //   for (const [option, count] of voteCounts) {
  //     output += `<p> ${option}: ${count} głosów</p>`;
  //   }
  voteCounts.forEach((count, option) => {
    output += `<p> ${option}: ${count} głosów</p>`;
  });
  voteResults.innerHTML = output;
};

votingForm.addEventListener('submit', voting);
updateResults();
