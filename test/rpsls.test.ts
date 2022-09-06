import { test, it, expect } from 'vitest';
import RPSLSGame from '../src/rps/Logic/RPSLSGame';
import Result from '../src/rps/Result';

const game = new RPSLSGame();

it('draws from a set of five models', () => {
    for (let i = 0; i < 50; i++) {
        let symbol = game.draw();
        expect(symbol).toBeIn(['rock', 'paper', 'scissors', 'lizard', 'spock']);
    }
});

test.each([
    ['rock', 'scissors', Result.Win],
    ['rock', 'lizard', Result.Win],
    ['scissors', 'paper', Result.Win],
    ['scissors', 'lizard', Result.Win],
    ['paper', 'rock', Result.Win],
    ['paper', 'spock', Result.Win],
    ['lizard', 'spock', Result.Win],
    ['lizard', 'paper', Result.Win],
    ['spock', 'rock', Result.Win],
    ['spock', 'scissors', Result.Win],

    ['rock', 'rock', Result.Tie],
    ['scissors', 'scissors', Result.Tie],
    ['paper', 'paper', Result.Tie],
    ['lizard', 'lizard', Result.Tie],
    ['spock', 'spock', Result.Tie],

    [ 'scissors', 'rock', Result.Loss],
    [ 'lizard', 'rock', Result.Loss],
    [ 'paper', 'scissors', Result.Loss],
    [ 'lizard', 'scissors', Result.Loss],
    [ 'rock', 'paper', Result.Loss],
    [ 'spock', 'paper', Result.Loss],
    [ 'spock', 'lizard', Result.Loss],
    [ 'paper', 'lizard', Result.Loss],
    [ 'rock', 'spock', Result.Loss],
    [ 'scissors', 'spock', Result.Loss],
])('%s vs %s results in %s', (own, opponent, expected) => {
    expect(game.evaluate(own, opponent)).toBe(expected);
});