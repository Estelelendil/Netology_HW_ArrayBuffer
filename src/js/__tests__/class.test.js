import Character, {
  Magician, Daemon,
} from '../class';

test('testing functiom demage', () => {
  const pers = new Daemon('Larry');
  const result = {
    attack: 100,
    defence: 40,
    datura: false,
    health: 40,
    level: 1,
    name: 'Larry',
    type: 'Daemon',
  };
  expect(result).toEqual(pers.demage(100));
});

test('testing functiom demage for dead person', () => {
  expect(() => {
    const pers = new Daemon('Larry');
    pers.demage(250);
    pers.demage(150);
  }).toThrow('');
});

//   test('every daughter-object depends from parents class', () => {
//     const result = true;
//     expect(result).toBe(persons.every((item) => item instanceof Character));
//   });

test('exemplar persons Daemon corresponce class constructor', () => {
  const result = {
    attack: 100,
    defence: 40,
    datura: false,
    health: 100,
    level: 1,
    name: 'Larry',
    type: 'Daemon',
  };
  const pers = new Daemon('Larry');
  expect(result).toEqual(pers);
});

test('exemplar persons Magician corresponce class constructor', () => {
  const result = {
    attack: 100,
    defence: 40,
    datura: false,
    health: 100,
    level: 1,
    name: 'Din',
    type: 'Magician',
  };
  const pers = new Magician('Din');
  expect(result).toEqual(pers);
});

test('error name when create person', () => {
  expect(() => new Magician('N')).toThrow('');
});

test('error type when create person', () => {
  expect(() => new Character('Name', 'Magician1')).toThrow('');
});
