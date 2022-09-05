getPuzzle = async (wordNum) => {
  data = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordNum}`
  ).json();

  return data.puzzle;
};
