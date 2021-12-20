export function attack (attacker, defender) {
  let attack = Math.floor(Math.random() * 20) + attacker.strength
  console.log(attack);
  if(attack > defender.dexterity){
    return true
  } 
}

export function loot(enemy) {
  let loot = enemy.money;
  return loot;
}