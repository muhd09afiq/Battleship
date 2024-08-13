import { Gameboard } from "../component/gameboard";
import { Ship } from "../component/ship";

describe("Receive Attack Test", () => {
  let board;
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
    board = new Gameboard();
  });

  test("should return hit on occupied coordinate and ship hp to lower", () => {
    board.placeShip(ship, "A", 1);
    expect(board.receiveAttack("A1")).toBe("hit");
    expect(ship.getHit()).toBe(1);
    expect(board.receiveAttack("A2")).toBe("hit");
    expect(ship.getHit()).toBe(2);
  });
});
