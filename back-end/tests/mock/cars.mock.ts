import Car from '../../src/Domains/Car';
import ICar from '../../src/Interfaces/ICar';

export const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carInputWithoutStatus: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carOutput: Car = new Car({
  id: '63776ded12654d2053a32382',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
});

export const carOutputStatusFalse: Car = new Car({
  id: '63776ded12654d2053a32382',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: false,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
});

export const carOutputId = {
  _id: '63776ded12654d2053a32382',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carOutputIdAjust = {
  id: '63776ded12654d2053a32382',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carArrayOutPutId = [
  {
    _id: '63776ded12654d2053a32382',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    _id: '63776ded12654d2053a32384',
    model: 'Palio',
    year: 2010,
    color: 'Black',
    status: true,
    buyValue: 20.990,
    doorsQty: 4,
    seatsQty: 5,
  },
];

export const carInput2: ICar = {
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  status: true,
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
};

export const carArrayOutPutIdAjust = [
  {
    id: '63776ded12654d2053a32382',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63776ded12654d2053a32384',
    model: 'Palio',
    year: 2010,
    color: 'Black',
    status: true,
    buyValue: 20.990,
    doorsQty: 4,
    seatsQty: 5,
  },
];