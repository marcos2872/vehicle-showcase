export default interface ICar {
  id?: string;
  brand: string
  model: string;
  year: number;
  mileage: number
  status?: string;
  images: { url: string }[];
  price: number;
}