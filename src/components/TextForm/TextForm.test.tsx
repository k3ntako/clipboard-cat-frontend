import { render, fireEvent } from "@testing-library/react";
import { TextForm, TextFormProps } from "./TextForm";

const setup = (props: Partial<TextFormProps> = {}) => {
  const mockOnSubmit: jest.Mock<any, any> = jest.fn();
  const renderUtils = render(<TextForm onSubmit={mockOnSubmit} {...props} />);
  return {
    renderUtils,
    mockOnSubmit,
  };
};

test("should display form elements", () => {
  const {
    renderUtils: { getByRole, getByLabelText },
  } = setup();

  const form = getByRole("form");
  expect(form).toBeInTheDocument();

  const input = getByLabelText("Paste text:");
  expect(input).toBeInTheDocument();

  const submitButton = getByRole("button", { name: "Submit" });
  expect(submitButton).toBeInTheDocument();
});

test("should display user input", () => {
  const {
    renderUtils: { getByLabelText },
  } = setup();

  const input = getByLabelText("Paste text:") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "this is a test string!" } });

  expect(input.value).toBe("this is a test string!");
});

test("should submit user input", () => {
  const {
    renderUtils: { getByRole, getByLabelText },
    mockOnSubmit,
  } = setup();

  const input = getByLabelText("Paste text:") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "CAPITALIZED STRING?" } });

  const submitButton = getByRole("button", { name: "Submit" });
  fireEvent.click(submitButton);

  expect(mockOnSubmit.mock.calls[0][0]).toEqual("CAPITALIZED STRING?");
});

test("should clear input field on successful submit", () => {
  const {
    renderUtils: { getByRole, getByLabelText, queryByDisplayValue },
  } = setup();

  const input = getByLabelText("Paste text:") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "CAPITALIZED STRING?" } });

  const submitButton = getByRole("button", { name: "Submit" });
  fireEvent.click(submitButton);

  const text = queryByDisplayValue("CAPITALIZED STRING?");
  expect(text).not.toBeInTheDocument();
});

test("should not clear input field on submit error", () => {
  const {
    renderUtils: { getByRole, getByLabelText, queryByDisplayValue },
  } = setup({
    onSubmit: jest.fn(() => {
      throw new Error("Test error in fetch");
    }),
  });

  const input = getByLabelText("Paste text:") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "CAPITALIZED STRING?" } });

  const submitButton = getByRole("button", { name: "Submit" });
  fireEvent.click(submitButton);

  const text = queryByDisplayValue("CAPITALIZED STRING?");
  expect(text).toBeInTheDocument();
});

test("should disable button if there is no text", () => {
  const {
    renderUtils: { getByRole },
    mockOnSubmit,
  } = setup();

  const submitButton = getByRole("button", { name: "Submit" });
  expect(submitButton).toHaveAttribute("disabled");

  fireEvent.click(submitButton);

  expect(mockOnSubmit).not.toHaveBeenCalled();
});

test("should disable button text is only whitespace", () => {
  const {
    renderUtils: { getByRole, getByLabelText },
    mockOnSubmit,
  } = setup();

  const input = getByLabelText("Paste text:") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "  \n " } });

  const submitButton = getByRole("button", { name: "Submit" });
  expect(submitButton).toHaveAttribute("disabled");

  fireEvent.click(submitButton);

  expect(mockOnSubmit).not.toHaveBeenCalled();
});

test("should disable button text is over max length limit", () => {
  const {
    renderUtils: { getByRole, getByLabelText },
    mockOnSubmit,
  } = setup();

  const input = getByLabelText("Paste text:") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "a".repeat(251) } });

  const submitButton = getByRole("button", { name: "Submit" });
  expect(submitButton).toHaveAttribute("disabled");

  fireEvent.click(submitButton);

  expect(mockOnSubmit).not.toHaveBeenCalled();
});

test("should display text length limit", () => {
  const {
    renderUtils: { getByLabelText, getByText },
  } = setup();

  const input = getByLabelText("Paste text:") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "a".repeat(230) } });

  const lengthIndicator = getByText("230/250");
  expect(lengthIndicator).toBeInTheDocument();
});
