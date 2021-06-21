import { TextRequests } from "../utilities/textRequests";
import { createSingleEntry, fullResponse } from "./mockTextResponses";

export const generateMockTextRequests = (): TextRequests => {
  return {
    getTexts: jest.fn(async () => fullResponse),
    uploadText: jest.fn(async (textString: string) =>
      createSingleEntry(textString)
    ),
  };
};
