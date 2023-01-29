export default interface ICar {
  id?: string
  brand: string
  model: string
  year: number
  mileage: number
  status?: string
  images: Array<{ url: string }>
  price: number
  created_at?: string
  updated_at?: string
}
