import Logic from "./Logic/Logic";
import RPSGame from "./Logic/RPSGame";
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
        view.onBegin((game: string) => this.startGame(game));
    }

    startGame(name: string) {
        const view = new GameView();
        view.attachToDom(this.appMount);

        let game: Logic;
        switch (name) {
            case "rps":
                game = new RPSGame();
                break;

            case "rpsls":
                game = new RPSLSGame();
                break;

            default:
                console.error("Invalid Game selected.");
                return;
        }

        view.setSymbols(game.symbols);

        view.onClick((symbol: string) => {
            const opponent = game.draw();
            view.revealOpponentsChoice(opponent);

            const result = game.evaluate(symbol, opponent);
            view.setOutcome(result);
        });
    }
 
}