import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

const props = {
  id: 1,
  title: "test product",
  description: "Lorem ipsom",
  category: "Men's shoe",
  image: "https://www.google.com/img/logo.png",
  alt: "google image",
};
describe("<ProductCard />", () => {
  it("should display product image", () => {
    render(<ProductCard {...props} />);
    const image = screen.getByRole("img", { name: "google image" });
    expect(image).toBeTruthy();
  });

  it("should display title of the product", () => {
    render(<ProductCard {...props} />);
    const title = screen.getByRole("heading", { level: 4, name: /test product/i });
    expect(title).toBeTruthy();
  });

  it("should display description of the product", () => {
    render(<ProductCard {...props} />);
    const title = screen.getByText(/Lorem ipsom/i);
    expect(title).toBeTruthy();
  });

  it("should display category of the product", () => {
    render(<ProductCard {...props} />);
    const title = screen.getByText(/Men's shoe/i);
    expect(title).toBeTruthy();
  });
  it("should display add to favourites button", () => {
    render(<ProductCard {...props} />);
    const title = screen.getByRole("button", { name: /Add to favourites/i });
    expect(title).toBeTruthy();
  });
});
