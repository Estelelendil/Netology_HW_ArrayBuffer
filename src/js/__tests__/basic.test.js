import {
  Magician, Daemon,
} from '../class';

describe('testing method getAttack', () => {
  const persDaemon = new Daemon('Larry');
  const persMagician = new Magician('Din');
  const dataList = [
    [1, 100],
    [2, 90],
    [8, 30],
  ];
  const hadler = test.each(dataList);
  hadler('testing method getAttack with %s distantion in class Daemon', (dist, expected) => {
    const result = persDaemon.getAttack(dist);
    expect(result).toBe(expected);
  });

  const hadlertwo = test.each(dataList);
  hadlertwo('testing method getAttack with %s distantion in class Magician', (dist, expected) => {
    const result = persMagician.getAttack(dist);
    expect(result).toBe(expected);
  });
  test('test getAttack function with datura in class Daemon', () => {
    persDaemon.datura = true;
    expect(persDaemon.getAttack(8)).toBe(15);
  });

  test('test getAttack function with datura in class Magician', () => {
    persMagician.datura = true;
    expect(persMagician.getAttack(4)).toBe(60);
  });
});
