import Zombie from '../Zombie';

const checkClass = new Zombie('John', 'zombie');
const correctArg = {
  name: 'John',
  type: 'zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Creating new Character', () => {
  expect(checkClass).toEqual(correctArg);
});
