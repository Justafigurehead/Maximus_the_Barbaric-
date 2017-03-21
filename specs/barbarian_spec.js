var maximus = require('../barbarian');
var assert = require('assert');
var maxbrew = require('../maxbrew');

describe('Maximus', function(){

beforeEach(function(){
  // maximus.healthPts = 100;
  maximus.angerlvl = 99;
});

  it('should have a full title', function(){
    assert.equal("Maximus the Brewer", maximus.fulltitle);
  });

  it('should have a weapon', function(){
    assert.equal("Ladle the Hopskiller", maximus.weapon);
  });

  it('should have an angerlvl that starts high', function(){
    assert.equal(99, maximus.angerlvl);
  });
  
  it('should have a favourite brew', function(){
    assert.equal("MaxBrew", maximus.favBrew);
  });

  it('should have healthPts', function(){
    assert.equal(100, maximus.healthPts);
  });

  it('drinking beer should increase Maximus health pts', function(){
    maximus.healthPts = 1;
    maximus.drink(maxbrew);
    assert.equal(26, maximus.healthPts);
  });

  it('drinking beer should decrease Maximus\'s angerlvl if it is his favourite', function(){
    maximus.drink(maxbrew);
    assert.equal(0, maximus.angerlvl);
  });

  it('drinking a beer that is not his favourite and turns into a rageBeast', function(){
    maximus.drink("Tea_nutsBrew");
    assert.equal(100,maximus.angerlvl);
  });

})