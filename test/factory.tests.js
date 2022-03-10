// let assert = require("assert");
// let gameFactory = require("../factory");

describe('The checkNumber function', () => {
    it('should return the guess being too high when your guess is higher than the secret random number.', () => {
        assert.equal("Your guess is too high!", gameFactory(input > randomNumber && input < 100));
    });
    it('should return the guess being too low when your guess is lower than the secret random number.', () => {
        assert.equal("Your guess is too low!", gameFactory(input < randomNumber && input > 100));
    });
    it('should return the guess being out of range when your guess is less than 1.', () => {
        assert.equal("Your guess is out of range!", gameFactory(input < 1));
    });
    it('should return the guess being out of range when your guess is greater than 100.', () => {
        assert.equal("Your guess is out of range!", gameFactory(input > 100));
    });
    it('should return the guess being out of range when your guess is greater than 100.', () => {
        assert.equal("Your guess is out of range!", gameFactory(input > 100));
    });
    it('Correct, the secret number is " + randomNumber + !.', () => {
        assert.equal("Your guess is out of range!", gameFactory(input == randomNumber));
    });
});
describe('The againButton function', () => {
    it('should return new game started.', () => {
        assert.equal("New Game Started!", gameFactory());
    });
});