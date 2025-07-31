class Statistics {
  constructor() {
    this.gameResults = [];
  }

  addGameToStatistics(win, bid) {
    let gameResult = {
      //   win: win,
      //   bid: bid,
      win,
      bid,
    };

    console.log(gameResult);
    this.gameResults.push(gameResult);
  }

  showGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter((result) => result.win === true).length;
    let losses = this.gameResults.filter(
      (result) => result.win === false
    ).length;
    // console.log(wins);
    // console.log(losses);

    return [games, wins, losses];
  }
}

// const statistics = new Statistics();
