const typeOfCharacters = {
  bowman: {
    attack: 25,
    defence: 25,
  },
  swordsman: {
    attack: 40,
    defence: 10,
  },
  magician: {
    attack: 10,
    defence: 40,
  },
  daemon: {
    attack: 10,
    defence: 40,
  },
  undead: {
    attack: 25,
    defence: 25,
  },
  zombie: {
    attack: 40,
    defence: 10,
  },
};

export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  checkName() {
    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) {
      throw new Error('Ошибка: неверное количество символов');
    }
  }

  checkType() {
    if (this.type in typeOfCharacters === false) {
      throw new Error('Ошибка: неверный тип');
    }
  }

  attackAnddefenceValue() {
    this.attack = typeOfCharacters[this.type].attack;
    this.defence = typeOfCharacters[this.type].defence;
  }
}
