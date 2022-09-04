import View from "./View";

export default class GameView extends View
{

    public render(): string {
        return `
            <main>
                <section>
                    <i class="symbol rock"></i>
                    <i class="symbol paper"></i>
                    <i class="symbol scissor"></i>
                    <i class="symbol lizard"></i>
                    <i class="symbol spock"></i>
                </section>

                <section class="opponent">
                    <i class="symbol rock"></i>
                    <i class="symbol paper"></i>
                    <i class="symbol scissor"></i>
                    <i class="symbol lizard"></i>
                    <i class="symbol spock"></i>
                </section>
            </main>
        `;
    }

}