import Magician from '../Magician';

const checkClass = new Magician('John', 'magician');
const correctArg = {
  name: 'John',
  type: 'magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test('Creating new Character', () => {
  expect(checkClass).toEqual(correctArg);
});
