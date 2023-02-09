function canPlay() {
  let sport = " Football";
  let personName;
  if (true) {
    personName = "Cosimo";
  }

  // personName was in the if block's scope.
  // So we cannot reach that variable out of the if block.

  console.log(personName + sport);
}

canPlay();
