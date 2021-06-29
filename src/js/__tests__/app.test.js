import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('Make Bowman from Character', () => {
  expect(new Character('Lev', 'Bowman')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Bowman',
  });
});

test('Wrong named character', () => {
  expect(() => new Character('Lev', 'BoBoBowman')).toThrow();
});

test('Make Bowman', () => {
  expect(new Bowman('Lev')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Bowman',
  });
});

test('Make Swordsman', () => {
  expect(new Swordsman('Lev')).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Swordsman',
  });
});

test('Make Daemon', () => {
  expect(new Daemon('Lev')).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Daemon',
  });
});

test('Make Magician', () => {
  expect(new Magician('Lev')).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Magician',
  });
});

test('Make Undead', () => {
  expect(new Undead('Lev')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Undead',
  });
});

test('Make Zombie', () => {
  expect(new Zombie('Lev')).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Lev',
    type: 'Zombie',
  });
});

test('Throw error on short or long name', () => {
  expect(() => new Bowman('D')).toThrow();
  expect(() => new Bowman('LevLevLev')).toThrow();
});

test('levelUp', () => {
  const bow1 = new Bowman('Lev');
  bow1.health = 50;
  bow1.levelUp();
  expect(bow1).toEqual({
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
    name: 'Lev',
    type: 'Bowman',
  });
});

test('LevelUp on died', () => {
  const bow1 = new Bowman('Lev');
  bow1.health = 0;
  expect(() => bow1.levelUp()).toThrow();
});

test('Damage points per alive', () => {
  const bow1 = new Bowman('Lev');
  bow1.damage(50);
  expect(bow1.health).toBeCloseTo(62.5);
});

test('Fatal Damage', () => {
  const bow1 = new Bowman('Lev');
  expect(() => bow1.damage(200)).toThrow();
});
