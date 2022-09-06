import { test, expect, it } from 'vitest';
import RPSGame from '../src/rps/Logic/RPSGame'
import Outcome from '../src/rps/Outcome';

const game = new RPSGame();

it('draws from a set of three symbols', () => {
    for (let i = 0; i < 30; i++) {
        let symbol = game.draw();
        expect(symbol).toBeIn(['rock', 'paper', 'scissors']);
    }
});

test.each([
    ['rock', 'scissors', Outcome.Win],
    ['scissors', 'paper', Outcome.Win],
    ['paper', 'rock', Outcome.Win],
    
    ['rock', 'rock', Outcome.Tie],
    ['scissors', 'scissors', Outcome.Tie],
    ['paper', 'paper', Outcome.Tie],

    ['scissors', 'rock', Outcome.Loss],
    ['paper', 'scissors', Outcome.Loss],
    ['rock', 'paper', Outcome.Loss],
])('%s vs %s results in %s', (own, opponent, expected) => {
    expect(game.evaluate(own, opponent)).toBe(expected);
});

test.each([
    ['rock', 'scissors', 'Rock crushes Scissors'],
    ['scissors', 'paper', 'Scissors cuts Paper'],
    ['paper', 'rock', 'Paper covers Rock'],

    ['rock', 'rock', 'Tie'],
    ['scissors', 'scissors', 'Tie'],
    ['paper', 'paper', 'Tie'],

    ['scissors', 'rock', 'Rock crushes Scissors'],
    ['paper', 'scissors', 'Scissors cuts Paper'],
    ['rock', 'paper', 'Paper covers Rock'],
])('%s vs %s results in %s', (own, opponent, description) => {
    expect(game.describe(own, opponent)).toBe(description);
});