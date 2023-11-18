export const BASE_URL = `https://dummyjson.com/products`;

export async function getProduct(id: number) {
  if (!id || typeof id !== 'number') {
    throw new Error('Invalid product ID');
  }
  const request = await fetch(`https://dummyjson.com/products/${id}`);
  const response = await request.json();
  return response;
}
