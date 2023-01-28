import {
  isValidObjectId,
  Model,
  models,
  Schema,
  // UpdateQuery,
  model,
} from 'mongoose';

const INVALID_MONGOID_SENTENCE = 'Invalid Mongo id';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  async find(): Promise<T[]> {
    return this.model.find();
  }

  async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error(INVALID_MONGOID_SENTENCE);
    return this.model.findById(id);
  }

  async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(INVALID_MONGOID_SENTENCE);
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj },
      { new: true },
    );
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error(INVALID_MONGOID_SENTENCE);
    return this.model.findByIdAndDelete(id);
  }
} 