function computerPlayer() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const result = Math.floor(Math.random() * options.length);
  return options[result];
}

console.log(computerPlayer());

