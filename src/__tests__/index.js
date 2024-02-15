import Character from '../index';

const checkClass = new Character('John', 'bowman');
const correctArg = {
  name: 'John',
  type: 'bowman',
  health: 100,
  level: 1,
  attack: undefined,
  defence: undefined,
};

test('Checking Name with Error', () => {
  expect(() => {
    const errorArg = new Character('1', 'bowman');
  }).toThrow(new Error('Ошибка: неверное количество символов'));
});

test('Checking Type with Error', () => {
  expect(() => {
    const errorArg = new Character('John', 'bwman');
  }).toThrow(new Error('Ошибка: неверный тип'));
});

test('Creating new Character', () => {
  expect(checkClass).toEqual(correctArg);
});
