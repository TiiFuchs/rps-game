import Outcome from "../Outcome";

type GameRules = {[key: string]: {[key: string]: string}};

export default class Logic
{

    public readonly symbols: string[];

    protected rules: GameRules;

    constructor(rules: GameRules)
    {
        this.symbols = Object.keys(rules);
        this.rules = rules;
    }

    draw(): string
    {
        return this.symbols[Math.floor(Math.random() * this.symbols.length)];
    }

    evaluate(own: string, opponent: string): Outcome
    {
        if (own === opponent) {

            return Outcome.Tie;

        } else if (typeof this.rules[own][opponent] !== 'undefined') {

            return Outcome.Win;

        } else {

            return Outcome.Loss;

        }
    }

    describe(own: string, opponent: string): string {

        if (own === opponent) {
            return 'Tie';
        }

        const capitalizedOwn = own[0].toUpperCase() + own.slice(1);
        const capitalizedOpponent = opponent[0].toUpperCase() + opponent.slice(1);
        
        let verb: string;
        if (verb = this.rules[own][opponent]) {

            // A winning rule exists for the player
            return `${capitalizedOwn} ${verb} ${capitalizedOpponent}`;

        } else {

            // If there is no winning rule, the opponent won
            verb = this.rules[opponent][own] ?? 'beats'
            return `${capitalizedOpponent} ${verb} ${capitalizedOwn}`;

        }
    }
}