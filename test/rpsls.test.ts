import { test, it, expect } from 'vitest';
import RPSLSGame from '../src/rps/Logic/RPSLSGame';
import Outcome from '../src/rps/Outcome';

const game = new RPSLSGame();

it('draws from a set of five models', () => {
    for (let i = 0; i < 50; i++) {
        let symbol = game.draw();
        expect(symbol).toBeIn(['rock', 'paper', 'scissors', 'lizard', 'spock']);
    }
});

test.each([
    ['rock', 'scissors', Outcome.Win],
    ['rock', 'lizard', Outcome.Win],
    ['scissors', 'paper', Outcome.Win],
    ['scissors', 'lizard', Outcome.Win],
    ['paper', 'rock', Outcome.Win],
    ['paper', 'spock', Outcome.Win],
    ['lizard', 'spock', Outcome.Win],
    ['lizard', 'paper', Outcome.Win],
    ['spock', 'rock', Outcome.Win],
    ['spock', 'scissors', Outcome.Win],

    ['rock', 'rock', Outcome.Tie],
    ['scissors', 'scissors', Outcome.Tie],
    ['paper', 'paper', Outcome.Tie],
    ['lizard', 'lizard', Outcome.Tie],
    ['spock', 'spock', Outcome.Tie],

    ['scissors', 'rock', Outcome.Loss],
    ['lizard', 'rock', Outcome.Loss],
    ['paper', 'scissors', Outcome.Loss],
    ['lizard', 'scissors', Outcome.Loss],
    ['rock', 'paper', Outcome.Loss],
    ['spock', 'paper', Outcome.Loss],
    ['spock', 'lizard', Outcome.Loss],
    ['paper', 'lizard', Outcome.Loss],
    ['rock', 'spock', Outcome.Loss],
    ['scissors', 'spock', Outcome.Loss],
])('%s vs %s results in %s', (own, opponent, expected) => {
    expect(game.evaluate(own, opponent)).toBe(expected);
});

test.each([
    ['rock', 'scissors', 'Rock crushes Scissors'],
    ['rock', 'lizard', 'Rock crushes Lizard'],
    ['scissors', 'paper', 'Scissors cuts Paper'],
    ['scissors', 'lizard', 'Scissors decapitates Lizard'],
    ['paper', 'rock', 'Paper covers Rock'],
    ['paper', 'spock', 'Paper disproves Spock'],
    ['lizard', 'spock', 'Lizard poisons Spock'],
    ['lizard', 'paper', 'Lizard eats Paper'],
    ['spock', 'rock', 'Spock vaporizes Rock'],
    ['spock', 'scissors', 'Spock smashes Scissors'],

    ['rock', 'rock', 'Tie'],
    ['scissors', 'scissors', 'Tie'],
    ['paper', 'paper', 'Tie'],
    ['lizard', 'lizard', 'Tie'],
    ['spock', 'spock', 'Tie'],

    ['scissors', 'rock', 'Rock crushes Scissors'],
    ['lizard', 'rock', 'Rock crushes Lizard'],
    ['paper', 'scissors', 'Scissors cuts Paper'],
    ['lizard', 'scissors', 'Scissors decapitates Lizard'],
    ['rock', 'paper', 'Paper covers Rock'],
    ['spock', 'paper', 'Paper disproves Spock'],
    ['spock', 'lizard', 'Lizard poisons Spock'],
    ['paper', 'lizard', 'Lizard eats Paper'],
    ['rock', 'spock', 'Spock vaporizes Rock'],
    ['scissors', 'spock', 'Spock smashes Scissors'],
])('%s vs %s results in %s', (own, opponent, description) => {
    expect(game.describe(own, opponent)).toBe(description);
});