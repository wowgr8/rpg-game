export default class Enemy{
  constructor(strength, dexterity, hitpoints, money){
    this.strength = strength;
    this.dexterity = dexterity;
    this.hitpoints = hitpoints;
    this.money = money;
  }

  takeDamage(attackCheck) {
    if(attackCheck === true){
      this.hitpoints -=3 ;
    }
  }

  checkHealth(){
  if (this.hitpoints < 1) {
    return false
    } else {
      return true
    }
  }
}