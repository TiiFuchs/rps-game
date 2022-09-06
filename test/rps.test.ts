import { test, expect, it } from 'vitest';
import RPSGame from '../src/rps/Logic/RPSGame'
import Result from '../src/rps/Result';

const game = new RPSGame();

it('draws from a set of three symbols', () => {
    for (let i = 0; i < 30; i++) {
        let symbol = game.draw();
        expect(symbol).toBeIn(['rock', 'paper', 'scissors']);
    }
});

test.each([
    ['rock', 'scissors', Result.Win],
    ['scissors', 'paper', Result.Win],
    ['paper', 'rock', Result.Win],
    ['rock', 'rock', Result.Tie],
    ['scissors', 'scissors', Result.Tie],
    ['paper', 'paper', Result.Tie],
    ['scissors', 'rock', Result.Loss],
    ['paper', 'scissors', Result.Loss],
    ['rock', 'paper', Result.Loss],
])('%s vs %s results in %s', (own, opponent, expected) => {
    expect(game.evaluate(own, opponent)).toBe(expected);
});