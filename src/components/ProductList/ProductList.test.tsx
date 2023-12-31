import { render, screen } from "@testing-library/react";
import ProductList from "@/components/ProductList";

const mockProducts = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
];

describe("<ProductList />", () => {
  it("should display navigation links", () => {
    render(<ProductList products={mockProducts} />);
    expect(screen.getByRole("link", { name: /Model view/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Product view/i })).toBeTruthy();
  });

  it("should display the first set of a list of products on first render", () => {
    render(<ProductList products={mockProducts} />);

    const productTitle = (title: string) => screen.getByRole("heading", { level: 4, name: title });

    expect(productTitle("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")).toBeTruthy();
    expect(productTitle("Mens Casual Premium Slim Fit T-Shirts")).toBeTruthy();
    expect(productTitle("Mens Cotton Jacket")).toBeTruthy();
  });

  describe("Pagination controls", () => {
    it("should highlight the index of results displayed in pagination", () => {
      render(<ProductList products={mockProducts} />);
      const resultsText = screen.getByText(`1 - ${mockProducts.length} of ${mockProducts.length} results`);
      expect(resultsText).toBeTruthy();
    });

    // Highlighting the test scenarios for the next development feature for pagination component
    it.todo("should disable the pagination button if the product list are less than the maximum displayed list");

    describe("When clicking the next button", () => {
      it.todo("should display the next set of product list");
      it.todo("should update the results indication");

      it.todo("should disable the next button at the last set of product list");
    });

    describe("When clicking the prev button", () => {
      it.todo("should display the prev set of product list");

      it.todo("should update the results indication");
      it.todo("should disable the prev button at the beginning product list");
    });
  });
});
