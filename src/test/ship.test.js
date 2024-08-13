import { Ship } from "../component/ship";

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3); // Initialize a ship with a length of 3
  });

  test("should initialize with correct ship length and hits", () => {
    expect(ship.getShipLength()).toBe(3);
    expect(ship.getHit()).toBe(0);
  });

  test("should increment hit count when hit method is called", () => {
    ship.hit();
    expect(ship.getHit()).toBe(1);
  });

  test("should return true for isSunk when hit count equals ship length", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("should return false for isSunk when hit count is less than ship length", () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("should sink if hit count exceeds ship length", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit(); // hitting more than the ship length
    expect(ship.isSunk()).toBe(true);
  });
});
