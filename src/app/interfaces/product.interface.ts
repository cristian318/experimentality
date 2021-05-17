export interface product {
  title: string;
  original_price?: number;
  price: number;
  thumbnail: string;
  id: string;
  discount?: number;
  inCart?: boolean;
}
