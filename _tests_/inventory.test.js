import Item from "../src/js/inventory.js"

describe('item', () => {

  test('should create an item', () => {
    let hammer = new Item("strength",7,10)
    expect(hammer.stat).toEqual("strength");
    expect(hammer.bonus).toEqual(7);
    expect(hammer.cost).toEqual(10);
  })
})