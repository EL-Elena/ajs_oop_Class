import Undead from '../Undead';

const checkClass = new Undead('John', 'undead');
const correctArg = {
  name: 'John',
  type: 'undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('Creating new Character', () => {
  expect(checkClass).toEqual(correctArg);
});
