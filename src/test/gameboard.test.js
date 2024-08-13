import { Gameboard } from "../component/gameboard";
import { Ship } from "../component/ship";

describe("Board", () => {
  let board;
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
    board = new Gameboard();
  });

  //   test("should initialize an object with 10x10 grid and fill with null", () => {
  //     expect(board.getBoard()).toHaveProperty("A10", null);
  //     expect(board.getBoard()).toHaveProperty("B7", null);
  //     expect(board.getBoard()).toHaveProperty("F3", null);
  //     expect(board.getBoard()).toHaveProperty("G6", null);
  //     expect(board.getBoard()).toHaveProperty("J5", null);
  //   });

  //   test("should provide coordinate status", () => {
  //     expect(board.getCoordinateStatus("A1")).toBe(null);
  //     expect(board.getCoordinateStatus("J9")).toBe(null);
  //     expect(board.getCoordinateStatus("H10")).toBe(null);
  //   });

  // test("should place a ship to the specify coordinate based on ship length and change status to true", () => {
  //   board.placeShip(ship, "A", "1");
  //   expect(board.getCoordinateStatus("A1")).toBe(true);
  //   expect(board.getCoordinateStatus("A2")).toBe(true);
  //   expect(board.getCoordinateStatus("A3")).toBe(true);
  // });

  //   test("should be able to place ship vertically", () => {
  //     board.placeShip(ship, "G", "1", "vertical");
  //     expect(board.getCoordinateStatus("G1")).toBe(true);
  //     expect(board.getCoordinateStatus("H1")).toBe(true);
  //     expect(board.getCoordinateStatus("I1")).toBe(true);
  //   });

  test("should not place ship out of bound", () => {
    board.placeShip(ship, "J", "1", "vertical");
    expect(board.getCoordinateStatus("J1")).toBe(null);
    board.placeShip(ship, "A", "10");
    expect(board.getCoordinateStatus("A10")).toBe(null);
  });
});
