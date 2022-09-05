import RPSLSGame from "./Logic/RPSLSGame";
import GameView from "./Views/GameView";
import StartView from "./Views/StartView";

export default class Game
{

    appMount: HTMLElement;

    constructor(appMount: HTMLElement) {
        this.appMount = appMount;
    }

    start() {
        const view = new StartView();
        view.attachToDom(this.appMount);
        view.onBegin(() => this.startGame());
    }

    startGame() {
        const view = new GameView();
        view.attachToDom(this.appMount);

        const game = new RPSLSGame();

        view.onClick((symbol: string) => {
            const opponent = game.draw();
            view.revealOpponentsChoice(opponent);

            const result = game.evaluate(symbol, opponent);
            setTimeout(() => {
                view.setOutcome(result);
            }, 600);
        });
    }
 
}