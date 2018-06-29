const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  var res = utils.square(4);

  expect(res).toBe(16).toBeA('number');
});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (square) => {
    expect(square).toBe(25).toBeA('number');
    done();
  });
});

it('should verify first and last name are', () => {
  var user = {location: 'Stara Zagora', age: 22};
  var res = utils.setName(user, 'Kiril Zhelyazkov');

  expect(res).toInclude({
    firstName: 'Kiril',
    lastName: 'Zhelyazkov'
  });
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
});
