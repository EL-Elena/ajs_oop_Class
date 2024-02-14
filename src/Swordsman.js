import Character from './Character';

class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    super.checkName();
    super.checkType();
    super.attackAnddefenceValue();
  }
}
