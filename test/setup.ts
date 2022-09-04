import {expect} from 'vitest';

expect.extend({
    toBeIn(received, expected: string[]) {
        const {isNot} = this;
        return {
            pass: expected.includes(received),
            message: () => `${received} is${isNot ? '' : ' not'} in the expected list of (` + expected.join(', ') + ')'
        };
    }
});