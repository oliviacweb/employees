var assert = require('chai').assert;
var Employee = require('./employee');

describe('Employee', function() {

  it('should have a name', function() {
    var marissa = new Employee("Marissa");
    var octavio = new Employee("Octavio");

    assert.equal(marissa.name, "Marissa");
    assert.equal(octavio.name, "Octavio");
  });

  it('should be helpful', function() {
    var marissa = new Employee("Marissa");

    assert.equal(marissa.personality, "helpful");
  });

  it('should start as a new employee', function() {
    var marissa = new Employee("Marissa");

    assert.equal(marissa.monthsOfEmployment, 0);
  });

  it('should keep track of time employed', function() {
    var marissa = new Employee("Marissa");

    marissa.work();
    marissa.work();
    marissa.work();
    assert.equal(marissa.monthsOfEmployment, 12);
  });

  it('should be onboarding until the 6 month workiversary', function() {
    var marissa = new Employee("Marissa");

    marissa.work();
    assert.equal(marissa.onboarding, true);
    marissa.work();
    assert.equal(marissa.onboarding, false);
  });

  it('should be on call if their name is less than 6 characters long', function() {
    var sally = new Employee("Sally");
    var marissa = new Employee("Marissa");
    var octavio = new Employee("Octavio");

    assert.equal(sally.onCall, true);
    assert.equal(marissa.onCall, false);
    assert.equal(octavio.onCall, false);
  });

});
