// this could be expanded to log errors with client loggers such as sentry or rollbar etc.
const logError = (message, response) => {
  throw new Error({
    message,
    status: response.status,
    error: response.error,
  });
};

export default async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (res.ok) {
      return res.json();
    } else {
      //   Typically would catch this call on client logger
      console.error(res);
      logError("Unable to get product list response");
    }
  } catch (error) {
    // Typically would catch this call on client logger
    logError("Unable to get request", error);
  }
};
