import Logic from "./Logic";

export default class RPSLSGame extends Logic
{
    constructor()
    {
        // Language constants would be better suited for these verbs, 
        // but that would go beyond the scope of this exercise
        super({
            'rock': {'scissors': 'crushes', 'lizard': 'crushes'},
            'paper': {'rock': 'covers', 'spock': 'disproves'},
            'scissors': {'paper': 'cuts', 'lizard': 'decapitates'},
            'lizard': {'spock': 'poisons', 'paper': 'eats'},
            'spock': {'scissors': 'smashes', 'rock': 'vaporizes'},
        });
    }
}