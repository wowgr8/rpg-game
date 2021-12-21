export default class Character {
  constructor(strength, dexterity, hitpoints, level, money) {
    this.strength = strength;
    this.dexterity = dexterity;
    this.hitpoints = hitpoints;
    this.level = level;
    this.money = money;
    this.inventory = [];
  }

  levelUp(){
    this.strength += 2;
    this.dexterity += 2;
    this.hitpoints += 5;
    this.level += 1;
  }

  takeDamage(attackCheck) {
    if(attackCheck === true){
      this.hitpoints -=3 ;
    }
  }

  checkHealth() {
    if (this.hitpoints < 1) {
      return false
    } else {
      return true
    }
  }

  getLoot(characterLoot) {
    this.money += characterLoot
  }

  addItemToInventory(item){
    if(this.inventory.length < 4) {
      this.inventory.push(item)
      if ( item.stat === 1) {
        this.strength += item.bonus;
        return this.strength;
      } else if ( item.stat === 2) {
        this.dexterity += item.bonus;
        return this.dexterity;
      } else {
        this.hitpoints += item.bonus;
        return this.hitpoints;
      }
    }
  }
}