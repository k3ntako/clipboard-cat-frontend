import { render, fireEvent } from "@testing-library/react";
import { TextFormContainer } from "./TextFormContainer";
import { generateMockTextRequests } from "../../testHelpers/mockTextRequests";

const setup = () => {
  const mockTextRequests = generateMockTextRequests();
  const renderUtils = render(
    <TextFormContainer textRequests={mockTextRequests} />
  );

  return {
    renderUtils,
    mockTextRequests,
  };
};

test("should make request to upload text", () => {
  const {
    renderUtils: { getByLabelText, getByRole },
    mockTextRequests,
  } = setup();

  const input = getByLabelText("Paste text:") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "CAPITALIZED STRING?" } });

  const submitButton = getByRole("button", { name: "Submit" });
  fireEvent.click(submitButton);

  expect(mockTextRequests.uploadText).toHaveBeenCalledTimes(1);
});
