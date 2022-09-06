import Logic from "./Logic";

export default class RPSGame extends Logic
{
    constructor()
    {
        super({
            'rock': ['scissors'],
            'paper': ['rock'],
            'scissors': ['paper']
        });
    }
}