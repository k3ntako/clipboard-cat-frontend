import { render } from "@testing-library/react";
import { RoomPage, RoomPageProps } from "./RoomPage";
import { generateMockTextRequests } from "../../testHelpers/mockTextRequests";
import { TextEntry } from "../../utilities/textRequests";

const setup = (params: Partial<RoomPageProps> = {}) => {
  const mockTextRequests = params.textRequests || generateMockTextRequests();
  const displayToast = jest.fn();

  const renderUtils = render(
    <RoomPage
      textRequests={mockTextRequests}
      displayToast={displayToast}
      {...params}
    />
  );

  return {
    renderUtils,
    displayToast,
    mockTextRequests,
  };
};

test("renders text from backend", async () => {
  const { renderUtils, mockTextRequests } = setup();
  const { findByText } = renderUtils;

  const text = await findByText("text 1");
  expect(text).toBeInTheDocument();

  const lastText = await findByText("text 10");
  expect(lastText).toBeInTheDocument();

  expect(mockTextRequests.getTexts).toBeCalledTimes(1);
});

test("displays text upload form", async () => {
  const { renderUtils } = setup();
  const { findByLabelText } = renderUtils;

  const input = await findByLabelText("Paste text:");
  expect(input).toBeInTheDocument();
});

test("handles error", async () => {
  const mockTextRequests = generateMockTextRequests();
  mockTextRequests.getTexts = async (): Promise<TextEntry[]> => {
    throw new Error("Get texts mock error");
  };

  const { renderUtils } = setup({ textRequests: mockTextRequests });
  const { findByText } = renderUtils;

  const text = await findByText("There was an error retrieving the texts");
  expect(text).toBeInTheDocument();
});
