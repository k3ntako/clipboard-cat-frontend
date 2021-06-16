import { render } from "@testing-library/react";
import { TextList } from "./TextList";
import {
  emptyResponse,
  fullResponse,
} from "../../testHelpers/mockTextResponses";

test("renders text passed in", () => {
  const { getByText } = render(<TextList texts={fullResponse} />);

  const text = getByText("text 1");
  expect(text).toBeInTheDocument();

  const lastText = getByText("text 10");
  expect(lastText).toBeInTheDocument();
});

test("renders text in order", () => {
  const { getAllByText } = render(<TextList texts={fullResponse} />);

  const texts = getAllByText(/text/);

  let textNumber = 1;
  for (const text of texts) {
    expect(text).toHaveTextContent(String(textNumber));
    textNumber++;
  }
});

test("handles response with no texts", () => {
  const { getByText } = render(<TextList texts={emptyResponse} />);

  const message = getByText("No texts yet");
  expect(message).toBeInTheDocument();
});
