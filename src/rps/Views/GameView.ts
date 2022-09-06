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
                <section class="opponent">
                    <h2>Opponent</h2>
                    <div class="symbols">
                        <div class="coin">
                            <span class="front"><i class="symbol unknown"></i></span>
                            <span class="back"><i class="symbol unknown"></i></span>
                        </div>
                    </div>
                </section>
            
                <section class="you">
                    <h2>You</h2>
                    <div class="symbols">
                        <i class="symbol unknown"></i>
                    </div>
                </section>

            </main>
        `;
    }

    public setSymbols(symbols: string[]) {
        // Clear symbols, just to be sure
        document.querySelectorAll('.you .symbol').forEach((element) => {
            element.remove();
        });

        // Append each symbol to the DOM
        const list = document.querySelector('.you > .symbols') as HTMLElement;
        symbols.forEach((symbol) => list.appendChild(this.createSymbol(symbol)));

        // Add random as a constant at the end
        list.appendChild(this.createSymbol('random'));
    }

    protected createSymbol(symbol: string): HTMLElement {
        const element = document.createElement('i');

        element.classList.value = `symbol ${symbol}`;
        element.dataset.symbol = symbol;

        return element;
    }

    public revealOpponentsChoice(symbol: string) {
        const coin = document.querySelector('.opponent .coin')!;
        
        if (! coin.classList.contains('flipped')) { // Coin shows front

            const weapon = coin.querySelector('.back > .symbol')!;
            weapon.classList.value = `symbol ${symbol}`;
            coin.classList.add('flipped');
        
        } else { // Coin shows back

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
                let symbol = element.dataset.symbol!;

                if (symbol === 'random') {
                    const allSymbols = document.querySelectorAll('.you .symbol:not(.random)');
                    element = allSymbols[Math.floor(Math.random() * allSymbols.length)] as HTMLElement;
                    symbol = element.dataset.symbol!;
                }

                document.querySelectorAll('.symbol.selected').forEach((element) => {
                    element.classList.remove('selected');
                });
                element.classList.add('selected');

                closure(symbol);
            });
        })
    }

}