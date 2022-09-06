import Logic from "./Logic";

export default class RPSGame extends Logic
{
    constructor()
    {
        // Language constants would be better suited for these verbs, 
        // but that would go beyond the scope of this exercise
        super({
            'rock': {'scissors': 'crushes'},
            'paper': {'rock': 'covers'},
            'scissors': {'paper': 'cuts'}
        });
    }
}