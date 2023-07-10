import getProducts from "./getProducts";

describe("getProducts()", () => {
  let mockUrl;
  let mockProducts;

  beforeEach(() => {
    mockUrl = "https://fakestoreapi.com/products";
    mockProducts = [
      {
        id: 16,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description:
          "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      },
      {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description:
          "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      },
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProducts),
      });
    });
  });
  test("should call with the correct params", async () => {
    await getProducts();

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  test("should return a parsed response if the status is ok", async () => {
    let results = await getProducts();
    expect(results).toEqual(mockProducts);
  });

  test("should return an error if the response is not okay", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        ok: false,
        status: 400,
        error: "Bad request",
      });
    });

    await expect(getProducts()).rejects.toEqual(Error("Unable to get request - status: 400"));
  });
});
