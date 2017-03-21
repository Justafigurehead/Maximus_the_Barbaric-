var barbarian = {
  fulltitle: "Maximus the Brewer",
  weapon: "Ladle the Hopskiller",
  angerlvl: 99,
  favBrew: "MaxBrew", 
  healthPts: 100, 
  drink: function(beer){
    if (beer.name === this.favBrew){
      this.healthPts += beer.drinkme();
      this.angerlvl = 0;
    } else {
      this.angerlvl = 100;
    }
  }
} 

module.exports = barbarian;