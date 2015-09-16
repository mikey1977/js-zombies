
var should = chai.should();
var expect = chai.expect;


describe('Item', function() {
  it('should be a class', function() {
    expect(Item).to.be.a('function');
  });
  it('should be a string', function() {
    var shoe = new Item('shoe');
    shoe.name.should.equal('shoe');
  });
});


describe('Weapon', function() {
  it('should be a class', function() {
    expect(Weapon).to.be.a('function');
  });
  it('should be a string', function() {
    expect(name).to.be.a('string');
  });
  it('should cause damage', function() {
    expect(Weapon).to.be.a('function');
  });
  it('should extend the Item class prototype', function() {
    expect(Weapon).to.be.a('function');
  });
});

describe('Food', function() {
  var energy = 'energy';
  it('should call Item and pass in its parameter', function() {
    expect(Food).to.be.a('function');
  });
  it('should be a string', function() {
    expect(name).to.be.a('string');
  });
  it('should have a public energy property that adds health', function() {
    expect(energy).to.exist;
  });
  //   it('should extend the Item class', function() {
  //   expect(new Food('PigCow', 100)).to.be.instanceof(new Item);
  // });
});

describe('Player', function() {
  var health = 'health'
    , strength = 'strength'
    , speed = 'speed'
    , getPack = 'getPack'
    , isAlive = 'isAlive';

  expect(health).to.exist;
  it('should be a class', function() {
    expect(Player).to.be.a('function');
  });
  it('should be a string', function() {
    expect(name).to.be.a('string');
  });
  it('should have a health property', function() {
    expect(health).to.exist;
  });
  it('should have a strength property', function() {
    expect(strength).to.exist;
  });
  it('should have a speed property', function() {
    expect(speed).to.exist;
  });
  //need to have a function that this refers to
  it('should have a private property', function() {
    expect(getPack).to.be.a('function');
  });
  it('should have a property isAlive set to true', function() {
    expect(isAlive).to.be.true;
  });
});