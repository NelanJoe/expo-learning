import type { Product } from "@/types";

const BASE_URL = "https://api.escuelajs.co/api/v1/";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();

  return data;
};
