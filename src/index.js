import "./css/reset.css";
import "./css/style.css";
import { GameMaster } from "./component/gameMaster";

//initialize game and show player board preview
const newGame = new GameMaster();
newGame.initializeBoard();
