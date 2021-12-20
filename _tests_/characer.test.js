import Character from "../src/js/character";
import Item from "../src/js/inventory.js"

describe('Character', () => {

  test('should correctly create a new character with stats', () => {
    const mario = new Character(5, 5, 5, 1, 20);
    expect(mario.strength).toEqual(5);
    expect(mario.dexterity).toEqual(5);
    expect(mario.hitpoints).toEqual(5);
    expect(mario.level).toEqual(1);
    expect(mario.money).toEqual(20);
  });

  test('should correctly create a new character with stats', () => {
    const mario = new Character(5, 5, 5, 1, 20);
    mario.levelUp();
    expect(mario.strength).toEqual(7);
    expect(mario.dexterity).toEqual(7);
    expect(mario.hitpoints).toEqual(10);
    expect(mario.level).toEqual(2);
  });

  test('should lower the player hitpoints if the enemy succeeds in hitting the player', () => {
    const mario = new Character(5, 5, 5, 1, 20);
    let attackCheck = true;
    mario.takeDamage(attackCheck);
    expect(mario.hitpoints).toEqual(2);
  });

  test('should check the player hitpoints to make sure they have not been defeated', () => {
    const mario = new Character(5, 5, 5, 1, 20);
    let characterAlieve = mario.checkHealth()
    expect(characterAlieve).toEqual(true);
  });

  test('should add the money value of a defeated monster to a players money value', () => {
    const mario = new Character(5, 5, 5, 1, 20);
    let characterLoot = 10;
    mario.getLoot(characterLoot)
    expect(mario.money).toEqual(30);
  });

  test('should add an item into the character inventory', () => {
    const mario = new Character(5, 5, 5, 1, 20);
    let hammer = new Item("strength",7,10)
    mario.addItemToInventory(hammer);
    expect(mario.inventory.length).toEqual(1);
  });

  test('should add the bonus from an item to a characters stats', () => {
    const mario = new Character(5, 5, 5, 1, 20);
    let hammer = new Item("strength",7,10)
    mario.addItemToInventory(hammer);
    expect(mario.strength).toEqual(12);
  });
});