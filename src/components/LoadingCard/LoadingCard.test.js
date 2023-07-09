import { render, screen } from "@testing-library/react";
import LoadingCard from "./LoadingCard";

describe("<LoadingCard />", () => {
  it("should display loading image", () => {
    render(<LoadingCard />);
    const image = screen.getByRole("img");
    expect(image).toBeTruthy();
  });
});
