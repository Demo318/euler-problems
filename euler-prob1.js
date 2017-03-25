var findTheAnswer1 = function(number) {
  var goodNumbers = [];
  var total = 0;
  for (i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      goodNumbers.push(i);
    }
  }
  for (i = 0; i < goodNumbers.length; i++) {
    total += goodNumbers[i];
  }
  console.log(total);
};
findTheAnswer1(1000);
