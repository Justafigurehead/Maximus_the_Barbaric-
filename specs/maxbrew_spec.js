var maxbrew = require('../maxbrew');
var assert = require('assert');

describe('MaxBrew', function(){

  it('should have a name', function(){
    assert.equal('MaxBrew', maxbrew.name);
  });

  it('should have set health pts it could give', function(){
    assert.equal(25, maxbrew.healPts);
  });
})