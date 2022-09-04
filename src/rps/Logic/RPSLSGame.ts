import Logic from "./Logic";

export default class RPSLSGame extends Logic
{
    constructor()
    {
        super({
            'rock': ['scissor', 'lizard'],
            'paper': ['rock', 'spock'],
            'scissor': ['paper', 'lizard'],
            'lizard': ['spock', 'paper'],
            'spock': ['scissor', 'rock'],
        });
    }
}