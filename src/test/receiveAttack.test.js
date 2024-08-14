import { Gameboard } from "../component/gameboard";
import { Ship } from "../component/ship";

describe("Receive Attack Test", () => {
  let board;
  let ship;
  let ship2;

  beforeEach(() => {
    ship = new Ship(3);
    ship2 = new Ship(4);
    board = new Gameboard();
  });

  test("should return hit on occupied coordinate", () => {
    board.placeShip(ship, "A", 1);
    board.placeShip(ship2, "C", 1);
    expect(board.receiveAttack("A1")).toBe("hit");
    expect(board.receiveAttack("A2")).toBe("hit");
    expect(board.receiveAttack("A3")).toBe("hit");
  });

  test("should return miss on unoccupied coordinate", () => {
    board.placeShip(ship, "A", 1);
    expect(board.receiveAttack("B1")).toBe("miss");
    expect(board.receiveAttack("B2")).toBe("miss");
    expect(board.receiveAttack("B3")).toBe("miss");
  });

  test("should increase hit count for ship that was hit", () => {
    board.placeShip(ship, "A", 1);
    board.receiveAttack("A1");
    expect(ship.getHit()).toBe(1);
    board.receiveAttack("A2");
    expect(ship.getHit()).toBe(2);
    board.receiveAttack("B2");
    expect(ship.getHit()).toBe(2);
  });

  test("should report if all ship has sunk", () => {
    board.placeShip(ship, "A", 1);
    board.receiveAttack("A1");
    board.receiveAttack("A2");
    board.receiveAttack("A3");
    expect(board.getAllShipStatus()).toBe("game end");
  });
});
