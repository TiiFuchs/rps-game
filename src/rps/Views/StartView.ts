import View from "./View";

export default class StartView extends View
{

    public render(): string
    {
        return `
            <h1>Rock Paper Scissors</h1>

            <p>You'll figure it out ;)</p>

            <section class="game-select">
                <button class="start" data-game="rps">
                    <i class="icon rock"></i>
                    <i class="icon paper"></i>
                    <i class="icon scissors"></i>
                </button>

                <button class="start" data-game="rpsls">
                    <i class="icon rock"></i>
                    <i class="icon paper"></i>
                    <i class="icon scissors"></i>
                    <i class="icon lizard"></i>
                    <i class="icon spock"></i>
                </button>
            </section>
        `;
    }

    public onBegin(closure: (game: string) => void) {
        document.querySelectorAll<HTMLElement>('.start').forEach((element) => {
            element.addEventListener('click', () => {
                closure(element.dataset.game!);
            })
        });
    }

}