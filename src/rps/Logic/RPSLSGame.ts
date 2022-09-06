import Logic from "./Logic";

export default class RPSLSGame extends Logic
{
    constructor()
    {
        super({
            'rock': ['scissors', 'lizard'],
            'paper': ['rock', 'spock'],
            'scissors': ['paper', 'lizard'],
            'lizard': ['spock', 'paper'],
            'spock': ['scissors', 'rock'],
        });
    }
}