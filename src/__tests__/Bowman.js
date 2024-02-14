import Bowman from '../Bowman';

const correctArr = new Bowman('Jhon', 'bowman');

test('Checking Name with Error', () => {
  expect(() => {
    const errorArr = new Bowman('1', 'bowman');
  }).toThrow(new Error('Ошибка: неверное количество символов'));
});

test('Checking Type with Error', () => {
  expect(() => {
    const errorArr = new Bowman('Jhon', 5);
  }).toThrow(new Error('Ошибка: неверный тип'));
});

test('Checking add Attack', () => {
  expect(correctArr.attack).toBe(25);
});

test('Checking add Defence', () => {
  expect(correctArr.defence).toBe(25);
});
