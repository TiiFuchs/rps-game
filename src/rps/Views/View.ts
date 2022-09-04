export default abstract class View
{

    public abstract render(): string;

    public attachToDom(mount: HTMLElement) {
        mount.innerHTML = this.render();
    }

}