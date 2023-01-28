import Motorcycle from '../../src/Domains/Motorcycle';
import IMotorcycle from '../../src/Interfaces/IMotorcycle';

export const motorcycleInput: IMotorcycle = {
  model: 'titan',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motorcycleInputWithoutStatus: IMotorcycle = {
  model: 'titan',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motorcycleOutput: Motorcycle = new Motorcycle({
  id: '63776ded12654d2053a32382',
  model: 'titan',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});

export const motorcycleOutputId = {
  _id: '63776ded12654d2053a32382',
  model: 'titan',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motorcycleOutputStatusFalse: Motorcycle = new Motorcycle({
  id: '63776ded12654d2053a32382',
  model: 'titan',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});

export const motorcycleArrayOutPutId = [
  {
    _id: '63776ded12654d2053a32382',
    model: 'titan',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    _id: '63776ded12654d2053a32384',
    model: 'titan',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
];

export const motorcycleArrayOutPutIdAjust = [
  {
    id: '63776ded12654d2053a32382',
    model: 'titan',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '63776ded12654d2053a32384',
    model: 'titan',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
];