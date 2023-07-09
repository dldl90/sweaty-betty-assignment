import { render, screen, within } from "@testing-library/react";
import Heading from "./Heading";

const props = {
  title: "Test title",
  subtitle: "subtitle testing",
};
describe("<Heading />", () => {
  it("should display title with correct element", () => {
    render(<Heading {...props} />);
    const title = screen.getByRole("heading", { level: 1, name: /Test title/i });
    expect(title).toBeTruthy();
  });
  it("should display subtitle", () => {
    render(<Heading {...props} />);
    const subtitle = screen.getByText("subtitle testing");
    expect(subtitle).toBeTruthy();
  });
});
