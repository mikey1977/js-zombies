
var should = chai.should();
var expect = chai.expect;


describe('Item', function() {
  it('should be a class', function() {
    expect(Item).to.be.a('function');
  });
  it('should be a string', function() {
    var shoe = new Item('shoe');
    shoe.should.have.property('name'); //test if property
    shoe.name.should.equal('shoe'); // checks
  });
});

// Create a Weapon
// Should be an Item
//   should call the super class Item constructor
//   should pass the Item constructor parameter
// Should be equipped
// Should have name and damage parameters
// Should have a damage property with damage amount
// Should extend the Item class prototype

var crowbar = new Weapon('crowbar', 50);
describe('Weapon', function() {
  it('should be a class', function() {
    expect(Weapon).to.be.a('function');
  });
  it('should be a string', function() {
    crowbar.should.have.property('name');
    crowbar.name.should.equal('crowbar');
  });
  it('should be an Item', function() {
    crowbar.should.be.an.instanceof(Item);
  });
  it('should have a property name', function() {
    crowbar.should.have.property('name');
  });
  it('should have name set to constructor argument', function() {
    crowbar.name.should.equal('crowbar');
  });
  it('should have a damage property', function() {
    crowbar.damage.should.equal(50);
  });
});

var bacon = new Food('bacon', 100);
describe('Food', function() {
  it('should be a class', function() {
    expect(Food).to.be.a('function');
  });
  it('should be a string', function() {
    bacon.should.have.property('name');
    bacon.name.should.equal('bacon');
  });
  it('should be an item', function() {
    bacon.should.be.an.instanceof(Item);
  });
  it('should have a property name', function() {
    bacon.name.should.equal('bacon');
  });
  it('should have name set to constructor argument', function() {
    bacon.name.should.equal('bacon');
  });
  it('should have an energy property', function() {
    bacon.energy.should.equal(100);
  });
});



describe('Player', function() {
  var killer;
  beforeEach(function() {
    killer = new Player('Dick Cheney', 50, 50, 10);
  });
  it('should be a class', function() {
    expect(Player).to.be.a('function');
  });
  it('should be a string', function() {
    killer.should.have.property('name');
    killer.name.should.equal('Dick Cheney');
  });
  it('should have a health property', function() {
    killer.should.have.property('health');
    killer.health.should.equal(50);
  });
  it('should have a strength property', function() {
    killer.should.have.property('strength');
    killer.strength.should.equal(50);
  });
  it('should have a speed property', function() {
    killer.should.have.property('speed');
    killer.speed.should.equal(10);
  });
  it('should have a private pack property', function() {
    killer.getPack().should.not.be.null;
    killer.getPack().should.deep.equal([]);
  });
  it('should have a private maxHealth property', function() {
    killer.should.have.property('maxHealth');
    killer.maxHealth.should.equal('health');
  });
  it('should have an isAlive property', function() {
    killer.should.have.property('isAlive');
    killer.isAlive.should.be.true;
  });
  it('should have an equipped property', function() {
    killer.should.have.property('equipped');
    killer.equipped.should.be.false;
  });
});
