const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7
})
//console.log(smallNumbers);
/* I used the filter method to return a new array of elements that meet chosen conditions */
