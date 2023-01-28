import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import CarService from '../../../src/Services/CarService';
import { carInput,
  carInputWithoutStatus,
  carOutput,
  carOutputStatusFalse,
  carOutputId,
  carArrayOutPutIdAjust,
  carOutputIdAjust,
  carArrayOutPutId,
} from '../../mock/cars.mock';

describe('Teste para a rota cars', function () {
  it('Teste se é criado um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.createCar(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Teste se é criado um carro com sucesso sem enviar status', async function () {
    sinon.stub(Model, 'create').resolves(carOutputStatusFalse);

    const service = new CarService();
    const result = await service.createCar(carInputWithoutStatus);

    expect(result).to.be.deep.equal(carOutputStatusFalse);
  });

  it('Teste se são retornados todos os carror cadastrados', async function () {
    sinon.stub(Model, 'find').resolves(carArrayOutPutId);

    const service = new CarService();
    const result = await service.findCars();

    expect(result).to.be.deep.equal(carArrayOutPutIdAjust);
  });

  it('Teste se é retornado um carro com sucesso se pesquisado pelo ID', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const result = await service.findCarsById('63776ded12654d2053a32382');

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Teste se é retornado ID inexistente', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new CarService();
    const result = await service.findCarsById('63776ded12654d2053a32364');

    expect(result).to.be.deep.equal(null);
  });

  it('Teste se é retornado um carro por um ID em formato incorreto', async function () {
    try {
      const service = new CarService();
      await service.findCarsById('63776ded12654d2053a32382AA');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid Mongo id');
    }
  });

  it('Teste se é atualizado um carro pelo ID', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutputId);

    const service = new CarService();
    const result = await service.updateCarById('63776ded12654d2053a32382', carInput);

    expect(result).to.be.deep.equal(carOutputIdAjust);
  });

  it('Teste se atualiza um carro por ID inexistente', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

    const service = new CarService();
    const result = await service.updateCarById('63776ded12654d2053a32387', carInput);

    expect(result).to.be.deep.equal(null);
  });

  it('Teste se é atualizado um carro por um ID em formato incorreto', async function () {
    try {
      const service = new CarService();
      await service.updateCarById('63776ded12654d2053a32382AA', carInput);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid Mongo id');
    }
  });
  
  afterEach(function () {
    sinon.restore();
  });
});