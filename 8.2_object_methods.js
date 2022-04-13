const myCountry = {
  country    : 'Israel',
  language   : 'Hebrew',
  population : 10,
  capital    : 'Jerusalem',
  neighbours : ['Egypt', 'Syria', 'Lebaon', 'Jordan'],
  describe   : function() {
    console.log(`${this.country} has ${this.population} millions people\ntheir mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  },
  checkisland  : function() {
     myCountry.isIsland = this.neighbours.length > 0 ? this.isIsland = false : this.isIsland = true
     console.log(this.isIsland);
  }
};

myCountry.describe();
myCountry.checkisland(); 

