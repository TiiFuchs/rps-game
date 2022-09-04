import './style.css'

import Game from './rps/Game';

const app = document.querySelector<HTMLDivElement>('#app')!;

const controller = new Game(app);
controller.start();