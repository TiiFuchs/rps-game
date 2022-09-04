import Logic from "./Logic";

export default class RPSGame extends Logic
{
    constructor()
    {
        super({
            'rock': ['scissor'],
            'paper': ['rock'],
            'scissor': ['paper']
        });
    }
}