import { render } from "@testing-library/react";
import { RoomPage } from "./RoomPage";
import { fullResponse } from "../../testHelpers/mockTextResponses";

test("renders text from backend", async () => {
  const textRequests = {
    getTexts: jest.fn(async () => fullResponse),
  };

  const { findByText } = render(<RoomPage textRequests={textRequests} />);

  const text = await findByText("text 1");
  expect(text).toBeInTheDocument();

  const lastText = await findByText("text 10");
  expect(lastText).toBeInTheDocument();

  expect(textRequests.getTexts).toBeCalledTimes(1);
});

test("handles error", async () => {
  const textRequests = {
    getTexts: async () => {
      throw new Error("Get texts mock error");
    },
  };

  const { findByText } = render(<RoomPage textRequests={textRequests} />);

  const text = await findByText("There was an error retrieving the texts");
  expect(text).toBeInTheDocument();
});
