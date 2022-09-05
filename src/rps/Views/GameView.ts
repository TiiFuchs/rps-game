import Outcome from "../Outcome";
import View from "./View";

export default class GameView extends View
{

    public render(): string {
        return `
            <header class="outcome">
                CHOOSE YOUR WEAPON
            </header>
            <main>
                <section class="you">
                    <h2>You</h2>
                    <i class="symbol rock" data-symbol="rock"></i>
                    <i class="symbol paper" data-symbol="paper"></i>
                    <i class="symbol scissor" data-symbol="scissor"></i>
                    <i class="symbol lizard" data-symbol="lizard"></i>
                    <i class="symbol spock" data-symbol="spock"></i>
                    <i class="symbol random" data-symbol="random"></i>
                </section>

                <section class="opponent">
                    <h2>Opponent</h2>
                    <span id="opponent-weapon" class="coin">
                        <span class="front"><i class="symbol unknown"></i></span>
                        <span class="back"><i class="symbol unknown"></i></span>
                    </span>
                </section>
            </main>
        `;
    }

    public revealOpponentsChoice(symbol: string) {
        const coin = document.querySelector('#opponent-weapon')!;

        if (! coin.classList.contains('flipped')) {
            const weapon = coin.querySelector('.back > .symbol')!;
            weapon.classList.value = `symbol ${symbol}`;
            coin.classList.add('flipped');
        } else {
            const weapon = coin.querySelector('.front > .symbol')!;
            weapon.classList.value = `symbol ${symbol}`;
            coin.classList.remove('flipped');
        }
    }

    outcomeText = {
        [Outcome.Win]: 'You won',
        [Outcome.Loss]: 'You lost',
        [Outcome.Tie]: 'Tie'
    };

    public setOutcome(outcome: Outcome) {
        const heading = document.querySelector('.outcome')!;
        heading.classList.value = `outcome ${outcome}`;
        heading.textContent = this.outcomeText[outcome];
    }

    public onClick(closure: (symbol: string) => void) {
        document.querySelectorAll('.you .symbol').forEach((element) => {
            element.addEventListener('click', (event) => {
                let element = event.currentTarget as HTMLElement;
                let symbol = element.dataset.symbol;

                if (symbol === 'random') {
                    const allSymbols = document.querySelectorAll('.you .symbol:not(.random)');
                    element = allSymbols[Math.floor(Math.random() * allSymbols.length)] as HTMLElement;
                    symbol = element.dataset.symbol;
                }

                document.querySelectorAll('.symbol.selected').forEach((element) => {
                    element.classList.remove('selected');
                });
                element.classList.add('selected');

                if (typeof symbol === 'undefined') {
                    console.error('ERROR: Invalid Button');
                    return;
                }

                closure(symbol);
            });
        })
    }

}