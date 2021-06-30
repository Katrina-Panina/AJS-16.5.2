export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    this.name = name;
    this.type = type;
    // eslint-disable-next-line no-mixed-operators
    if (
      name.length < 2
      || name.length > 10
      || (this.type !== 'Bowman'
      && this.type !== 'Swordsman'
      && this.type !== 'Magician'
      && this.type !== 'Daemon'
      && this.type !== 'Undead'
      && this.type !== 'Zombie')
    ) {
      throw new Error('Введены некорректные данные');
    }
    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    }
    if (type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    }
    if (type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    }
    if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }

  levelUp() {
    if (this.health < 1) {
      throw new Error('Персонаж мертв');
    }
    // eslint-disable-next-line no-plusplus
    this.level++;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health <= 0) {
      this.health = 0;
      throw new Error('Персонаж мертв');
    }
  }
}
