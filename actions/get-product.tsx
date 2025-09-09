import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}`);
    }
    const data = await res.json();
    return data;
  } catch (e) {
    // Surface a consistent failure by throwing; callers already guard
    throw e;
  }
};

export default getProduct;
