import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor({
    _id,
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty }: ICar) {
    super(_id, model, year, color, status, buyValue);

    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }
  public setgetDoorsQty(value: number) {
    this.doorsQty = value;
  }
  public getSeatsQty() {
    return this.seatsQty;
  }
  public setSeatsQty(value: number) {
    this.seatsQty = value;
  }
}

export default Car;