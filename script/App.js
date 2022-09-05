Start = () => {
  getPuzzle(1)
    .then((puzzle) => {
      p = new Hangman(puzzle, 5);
      p.render();
    })
    .catch(() => {
      p = new Hangman("puzzle", 5);
      p.render();
    });
};

Start();

window.addEventListener("keypress", (e) => {
  p.enterChar(e.key);
});

resetE = document.querySelector("#reset");
resetE.addEventListener("click", Start);
