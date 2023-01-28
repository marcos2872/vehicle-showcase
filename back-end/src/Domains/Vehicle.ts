class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(
    id: string | undefined,
    model: string,
    year: number,
    color: string,
    status: boolean | undefined,
    buyValue: number,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
  }
  public getModel() {
    return this.model;
  }
  public setModel(value: string) {
    this.model = value;
  }
  public getYear() {
    return this.year;
  }
  public setYear(value: number) {
    this.year = value;
  }
  public getColor() {
    return this.color;
  }
  public setColor(value: string) {
    this.color = value;
  }
  public getStatus() {
    return this.status;
  }
  public setStatus(value: boolean) {
    this.status = value;
  }
  public getBuyValue() {
    return this.buyValue;
  }
  public setBuyValue(values: number) {
    this.buyValue = values;
  }
}
export default Vehicle;