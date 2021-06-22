import { render, waitFor } from "@testing-library/react";
import { Toast, ToastType } from "./Toast";

beforeAll(() => {
  // Allows jest to skip forward on setTimeout
  // https://jestjs.io/docs/timer-mocks
  jest.useFakeTimers();
});

afterAll(() => {
  // Revert to default
  jest.useRealTimers();
});

test("displays message", () => {
  const { getByText } = render(
    <Toast message="Error in fetch" type={ToastType.Error} />
  );

  const text = getByText("Error in fetch");
  expect(text).toBeInTheDocument();
});

test("specifies error type", () => {
  const { getByText } = render(
    <Toast message="Error in fetch" type={ToastType.Error} />
  );

  const text = getByText("Error in fetch");
  expect(text).toHaveClass("toastError");
});

test("specifies success type", () => {
  const { getByText } = render(
    <Toast message="Successfully fetched" type={ToastType.Success} />
  );

  const text = getByText("Successfully fetched");
  expect(text).toHaveClass("toastSuccess");
});

test("node removed after few seconds", async () => {
  const { getByText, queryByText } = render(
    <Toast message="Error in fetch" type={ToastType.Error} />
  );

  const text = getByText("Error in fetch");
  expect(text).toBeInTheDocument();

  jest.advanceTimersByTime(6000);

  await waitFor(() => expect(queryByText("Error in fetch")));
});
