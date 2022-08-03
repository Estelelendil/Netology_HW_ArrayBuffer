// eslint-disable-next-line max-classes-per-file
class Character {
    health = 100;

    level = 1;

    attack;

    defence;

    constructor(name, type) {
      this.name = name;
      this.type = type;
      if (typeof this.name !== 'string' || this.name.length > 10 || this.name.length < 2) {
        throw new Error('Имя персонажа введено неверно');
      }
      if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(this.type)) {
        throw new Error('Тип персонажа введен неверно');
      }
    }

    // levelUp() {
    //   if (this.health > 0) {
    //     this.level += 1;
    //     this.attack *= 1.2;
    //     this.defence *= 1.2;
    //     this.health = 100;
    //     return this;
    //   }
    //   throw new Error('Sorry, ничего не полчится, Вы мертвы');
    // }

    demage(points) {
      if (this.health > 0) {
        this.health -= points * (1 - this.defence / 100);
        return this;
      }

      throw new Error('Sorry, ничего не полчится, Вы мертвы');
    }
}

export default Character;

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 100;
    this.defence = 40;
    this.datura = false;
  }

  getAttack(dist) {
    let curAttack = this.attack * (11 - dist) * 0.1;
    if (this.datura === true) {
      curAttack -= Math.log2(dist) * 5;
    }
    return curAttack;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 100;
    this.defence = 40;
    this.datura = false;
  }

  getAttack(dist) {
    let curAttack = this.attack * (11 - dist) * 0.1;
    if (this.datura === true) {
      curAttack = Math.log2(dist) * 5;
    }
    return curAttack;
  }
}
