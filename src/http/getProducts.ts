const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (res.ok) {
      return res.json();
    } else {
      //   Typically would catch this call on client logger such as sentry or rollbar etc.
      console.error(res);
      throw new Error(`Unable to get product list response - status: ${res.status}`);
    }
  } catch (e: any) {
    // Typically would catch this call on client logger
    throw new Error(`Unable to get request - status: ${e.status}`);
  }
};

export default getProducts;
