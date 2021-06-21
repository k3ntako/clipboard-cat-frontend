import { render } from "@testing-library/react";
import { RoomPage } from "./RoomPage";
import { generateMockTextRequests } from "../../testHelpers/mockTextRequests";
import { TextEntry } from "../../utilities/textRequests";

test("renders text from backend", async () => {
  const mockTextRequests = generateMockTextRequests();
  const { findByText } = render(<RoomPage textRequests={mockTextRequests} />);

  const text = await findByText("text 1");
  expect(text).toBeInTheDocument();

  const lastText = await findByText("text 10");
  expect(lastText).toBeInTheDocument();

  expect(mockTextRequests.getTexts).toBeCalledTimes(1);
});

test("displays text upload form", async () => {
  const mockTextRequests = generateMockTextRequests();
  const { findByLabelText } = render(
    <RoomPage textRequests={mockTextRequests} />
  );

  const input = await findByLabelText("Paste text:");
  expect(input).toBeInTheDocument();
});

test("handles error", async () => {
  const textRequests = generateMockTextRequests();

  textRequests.getTexts = async (): Promise<TextEntry[]> => {
    throw new Error("Get texts mock error");
  };

  const { findByText } = render(<RoomPage textRequests={textRequests} />);

  const text = await findByText("There was an error retrieving the texts");
  expect(text).toBeInTheDocument();
});
