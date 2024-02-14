import Character from './Character';

class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    super.checkName();
    super.checkType();
    super.attackAnddefenceValue();
  }
}
