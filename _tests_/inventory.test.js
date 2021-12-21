import Item from "../src/js/inventory.js"

describe('item', () => {

  test('should create an item', () => {
    let hammer = new Item(1,7,10)
    expect(hammer.stat).toEqual(1);
    expect(hammer.bonus).toEqual(7);
    expect(hammer.cost).toEqual(10);
  })
})