export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: { rate: number; count: number };
  image: string;
};
