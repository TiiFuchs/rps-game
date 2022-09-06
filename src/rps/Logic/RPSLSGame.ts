import Logic from "./Logic";

export default class RPSLSGame extends Logic
{
    constructor()
    {
        super({
            'rock': {'scissors': 'crushes', 'lizard': 'crushes'},
            'paper': {'rock': 'covers', 'spock': 'disproves'},
            'scissors': {'paper': 'cuts', 'lizard': 'decapitates'},
            'lizard': {'spock': 'poisons', 'paper': 'eats'},
            'spock': {'scissors': 'smashes', 'rock': 'vaporizes'},
        });
    }
}