var barbarian = {
  fulltitle: "Maximus the Brewer",
  weapon: "Ladle the Hopskiller",
  angerlvl: 99,
  favBrew: "MaxBrew", 
  healthPts: 100, 
  drink: function(beer){
    healthPts += beer.heal();
  }
} 

module.exports = barbarian;