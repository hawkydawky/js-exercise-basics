function canPlay() {
  let sport = " Football";

  if (true) {
    this.personName = "Cosimo";
  }

  // personName was in the if block's scope.
  // So we cannot reach that variable out of the if block.

  console.log(this.personName + sport);
}

canPlay();
