import Character from './Character';

class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    super.checkName();
    super.checkType();
    super.attackAnddefenceValue();
  }
}
