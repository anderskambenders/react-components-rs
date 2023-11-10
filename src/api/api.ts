export const baseUrl = (limit: number, skip: number) =>
  `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
export const searchUrl = (searchString: string) =>
  `https://dummyjson.com/products/search?q=${searchString}`;

export const getProductsData = async (url: string) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export async function getProduct(id: number) {
  if (!id || typeof id !== 'number') {
    throw new Error('Invalid product ID');
  }
  const request = await fetch(`https://dummyjson.com/products/${id}`);
  const response = await request.json();
  return response;
}
