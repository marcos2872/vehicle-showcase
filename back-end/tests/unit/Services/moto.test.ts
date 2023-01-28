import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  motorcycleInput,
  motorcycleInputWithoutStatus,
  motorcycleOutput,
  motorcycleOutputStatusFalse,
  motorcycleArrayOutPutIdAjust,
  motorcycleArrayOutPutId,
} from '../../mock/motorcycles.mock';

describe('Teste para a rota motorcycles', function () {
  it('Teste se é criado uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.createMoto(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Teste se é criada uma moto com sucesso sem enviar status', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutputStatusFalse);

    const service = new MotorcycleService();
    const result = await service.createMoto(motorcycleInputWithoutStatus);

    expect(result).to.be.deep.equal(motorcycleOutputStatusFalse);
  });
  it('Teste se são retornados todas as motos cadastradas', async function () {
    sinon.stub(Model, 'find').resolves(motorcycleArrayOutPutId);

    const service = new MotorcycleService();
    const result = await service.findMoto();

    expect(result).to.be.deep.equal(motorcycleArrayOutPutIdAjust);
  });
  it('Teste se é retornado uma moto com sucesso se pesquisado pelo ID', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.findMotoById('63776ded12654d2053a32382');

    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  it('Teste se é retornado ID inexistente', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new MotorcycleService();
    const result = await service.findMotoById('63776ded12654d2053a32364');

    expect(result).to.be.deep.equal(null);
  });
  it('Teste se é retornado uma moto por um ID em formato incorreto', async function () {
    try {
      const service = new MotorcycleService();
      await service.findMotoById('63776ded12654d2053a32382AA');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid Mongo id');
    }
  });
  it('Teste se é atualizado uma moto pelo ID', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.updateMoto('63776ded12654d2053a32382', motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  it('Teste se atualiza uma moto por ID inexistente', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

    const service = new MotorcycleService();
    const result = await service.updateMoto('63776ded12654d2053a32387', motorcycleInput);

    expect(result).to.be.deep.equal(null);
  });
  it('Teste se é atualizado uma moto por um ID em formato incorreto', async function () {
    try {
      const service = new MotorcycleService();
      await service.updateMoto('63776ded12654d2053a32382AA', motorcycleInput);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid Mongo id');
    }
  });
  it('Teste se o input vier inválido retorna NULL', async function () {
    sinon.stub(Model, 'create').resolves(null);

    const service = new MotorcycleService();
    const result = await service.createMoto(motorcycleInput);

    expect(result).to.be.deep.equal(null);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});