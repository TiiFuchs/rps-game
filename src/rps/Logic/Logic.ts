import Outcome from "../Outcome";

export default class Logic
{

    protected symbols: string[];

    protected rules: {[key: string]: string[]};

    constructor(rules: {[key: string]: string[]})
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

        } else if (this.rules[own].includes(opponent)) {

            return Outcome.Win;

        } else {

            return Outcome.Loss;

        }
    }
}