let sport = " Football";

function canPlay() {
  if (true) {
    this.personName = "Cosimo";
  }

  console.log(this.personName + sport);
}

canPlay();
