class Hangman {
  constructor(word, remindTry) {
    this.word = word.toLowerCase().split("");
    this.remindChar = word.length;
    this.remindTry = remindTry;
    this.expected = [];
  }

  puzzleRender() {
    let wordE = document.querySelector("#word");
    wordE.innerHTML = "";
    this.remindChar = this.word.length;
    this.word.forEach((char) => {
      if (this.expected.includes(char) || char === " ") {
        wordE.innerHTML += `<span>${char}</span>`;
        this.remindChar--;
      } else wordE.innerHTML += `<span>*</span>`;
    });
  }
  statusRender() {
    let remindTryE = document.querySelector("#remindTry");
    if (this.remindTry <= 0)
      remindTryE.innerHTML = `<p>Good Luck! the word is "${this.word.join(
        ""
      )}"</p>`;
    else if (this.remindChar <= 0) remindTryE.innerHTML = "<p>Great Work!</p>";
    else remindTryE.innerHTML = `<p>Guessess Left : ${this.remindTry}</p>`;
  }

  render() {
    this.puzzleRender();
    this.statusRender();
  }

  enterChar(char) {
    if (this.remindTry <= 0 || this.remindChar <= 0) return;
    if (!this.expected.includes(char)) {
      this.expected.push(char);
      if (!this.word.includes(char)) this.remindTry--;
      this.render();
    }
  }
}
