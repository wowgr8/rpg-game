export default class Character {
  constructor(strength, dexterity, hitpoints, level, money) {
    this.strength = strength;
    this.dexterity = dexterity;
    this.hitpoints = hitpoints;
    this.level = level;
    this.money = money;
    this.inventory = [];
    this.currentItemId = 0;
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
      item.id = this.assaignItemId()
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

  assaignItemId() {
    this.currentItemId += 1;
    return this.currentItemId;
  }

  findItem(id) {
    for(let i=0;i < this.inventory.length; i++) {
      if (this.inventory[i]) {
        if (this.inventory[i].id == id){
          return this.inventory[i];
        }
      }
    }
  }

  deleteItem(id){
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i]) {
        if (this.inventory[i].id == id) {
          this.inventory.splice(this.inventory[i], 1)
          return true;
        }
      }
    }
    return false;
  };
}