import Result from "../Result";

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

    evaluate(own: string, opponent: string): Result
    {
        if (own === opponent) {

            return Result.Tie;

        } else if (this.rules[own].includes(opponent)) {

            return Result.Win;

        } else {

            return Result.Loss;

        }
    }
}