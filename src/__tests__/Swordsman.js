import Swordsman from '../Swordsman';

const checkClass = new Swordsman('John', 'swordsman');
const correctArg = {
  name: 'John',
  type: 'swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Creating new Character', () => {
  expect(checkClass).toEqual(correctArg);
});
