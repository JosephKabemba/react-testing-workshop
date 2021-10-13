import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("should be in the document", () => {
    render(<SearchBar />);
    const divElement = screen.getByTestId("search-bar");
    expect(divElement).toBeInTheDocument();
  });
  it("should reset the input field to empty when search button is clicked", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText(/Type here/i);
    const buttonElement = screen.getByRole("button", { name: /search/i });

    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe("");
  });
});
