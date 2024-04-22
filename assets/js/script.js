import { robots } from "./robots.js";
import { getRobotBySeries,createCard,getRobotById,renderCards } from "./funciones.js"

console.table(getRobotById("013"));
console.table(getRobotBySeries(4));



 renderCards(robots,"robotsRow");
