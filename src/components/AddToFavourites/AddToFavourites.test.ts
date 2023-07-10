import { render, screen } from "@testing-library/react";

// As there is no scope for this button I have took the initiative to add todo list of test which would require some form of minimal test requirements.
// This would help to refine tickets during planning stages in sprints. And as a dev, I would capture this on the designs and write up a ticket for upcoming sprint refinement.
describe("<AddToFavourites />", () => {
  test.todo("should display add to favorites button with correct element");

  describe("When add to favourites is not save", () => {
    test.todo("should update favourite to save display upon click and successful request");
    test.todo("should handle fallback error message upon unsuccessful update");
  });

  describe("When add to favourites is already saved", () => {
    test.todo("should update favourite to remove save upon click and success");
    test.todo("should handle fallback error message upon unsuccessful update");
  });
});
