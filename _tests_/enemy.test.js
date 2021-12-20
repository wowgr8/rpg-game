import Enemy from "../src/js/enemy";

describe('Enemy', () => {

  test('should create a new enemy with stats', () => {
    const ghosts = new Enemy(2,5,5,10);
    expect(ghosts.strength).toEqual(2);
    expect(ghosts.dexterity).toEqual(5);
    expect(ghosts.hitpoints).toEqual(5);
    expect(ghosts.money).toEqual(10);
  });

  test('should lower the enemy hitpoints if the player succeeds in hitting the enemy', () => {
    const ghosts = new Enemy(2,5,5,10);
    let attackCheck = true;
    ghosts.takeDamage(attackCheck);
    expect(ghosts.hitpoints).toEqual(2);
  });

  test('should check the monsters hitpoints to see if it has been defeated', () => {
    const ghosts = new Enemy(2,5,0,10);
    let monsterAlieve = ghosts.checkHealth()
    expect(monsterAlieve).toEqual(false);
  });
})