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
