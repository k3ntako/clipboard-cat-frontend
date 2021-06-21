import { render, fireEvent } from "@testing-library/react";
import { TextForm } from "./TextForm";

let mockOnSubmit: jest.Mock<any, any>;
const setup = () => {
  mockOnSubmit = jest.fn();
  return render(<TextForm onSubmit={mockOnSubmit} />);
};

test("should display form elements", () => {
  const { getByRole, getByLabelText } = setup();

  const form = getByRole("form");
  expect(form).toBeInTheDocument();

  const input = getByLabelText("Paste text:");
  expect(input).toBeInTheDocument();

  const submitButton = getByRole("button", { name: "Submit" });
  expect(submitButton).toBeInTheDocument();
});

test("should display user input", () => {
  const { getByLabelText } = setup();

  const input = getByLabelText("Paste text:") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "this is a test string!" } });

  expect(input.value).toBe("this is a test string!");
});

test("should submit user input", () => {
  const { getByRole, getByLabelText } = setup();

  const input = getByLabelText("Paste text:") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "CAPITALIZED STRING?" } });

  const submitButton = getByRole("button", { name: "Submit" });
  fireEvent.click(submitButton);

  expect(mockOnSubmit.mock.calls[0][0]).toEqual("CAPITALIZED STRING?");
});
