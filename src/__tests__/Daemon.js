import Daemon from '../Daemon';

const checkClass = new Daemon('John', 'daemon');
const correctArg = {
  name: 'John',
  type: 'daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test('Creating new Character', () => {
  expect(checkClass).toEqual(correctArg);
});
