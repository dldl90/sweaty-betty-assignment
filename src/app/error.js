"use client";

const Error = ({ error }) => {
  // Typically would log error through a client logger such as sentry, rollbar, elastic rum etc. For this exercise I am just console log error
  console.error(error);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Opps! Something went wrong, unable to find products</h1>
    </div>
  );
};

export default Error;
