import View from "./View";

export default class StartView extends View
{

    public render(): string
    {
        return `
            <h1>Rock Paper Scissor</h1>

            <p>Everyone knows this game... So don't ask.</p>

            <button id="start-button">Begin</button>
        `;
    }

    public onBegin(closure: () => void) {
        document.querySelector('#start-button')?.addEventListener('click', closure);
    }

}