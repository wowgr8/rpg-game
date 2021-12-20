import Character from "../src/js/character";
import Enemy from "../src/js/enemy";
import {attack, loot} from "../src/js/batle.js"

describe('attack', () => {

  test('should take in two arguments of player and enemy and determine if the enemy is hit', () => {
    const ghosts = new Enemy(2,0,5,10);
    const mario = new Character(10, 5, 5, 1, 20)
    let attackCheck = attack(mario, ghosts);
    expect(attackCheck).toEqual(true);
  });

  test('should take in two arguments of player and enemy and determine if the player is hit', () => {
    const ghosts = new Enemy(10,5,5,10);
    const mario = new Character(5, 0, 5, 1, 20)
    let attackCheck = attack(ghosts, mario);
    expect(attackCheck).toEqual(true);
  });  
})

describe('loot', () => {
  
  test('should store the value of a enemy money to pass to the character money.', () => {
    const ghosts = new Enemy(10,5,5,10);
    let characterLoot = loot(ghosts);
    expect(characterLoot).toEqual(10);
  });  

  test('should move the money value from the enemy object and add it to the character money value.', () => {
    const ghosts = new Enemy(10,5,5,10);
    const mario = new Character(5, 5, 5, 1, 20)
    let characterLoot = loot(ghosts);
    mario.getLoot(characterLoot);
    expect(mario.money).toEqual(30);
  });  
})