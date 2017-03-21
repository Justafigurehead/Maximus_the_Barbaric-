var maximus = require('../barbarian');
var assert = require('assert');

describe('Maximus', function(){

beforeEach(function(){
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

  it('drinking beer should increase Maximus health pts', function(){
    maximus.healthPts = 1;
    maximus.drink(MaxBrew);
    assert.equal(100, maximus.healthPts);
  });

})