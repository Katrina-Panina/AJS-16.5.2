import Character from './character';
import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Undead from './undead';
import Zombie from './zombie';
import Daemon from './daemon';

const char1 = new Character('Lev', 'Daemon');

const bow1 = new Bowman('Bowman');
const swo1 = new Swordsman('Swordsman');
const mag1 = new Magician('Magician');
const und1 = new Undead('Undead');
const zom1 = new Zombie('Zombie');
const dae1 = new Daemon('Daemon');

// eslint-disable-next-line no-console
console.log(char1, bow1, swo1, mag1, und1, zom1, dae1);
