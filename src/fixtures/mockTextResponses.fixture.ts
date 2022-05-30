import { v4 } from "uuid";
import { TextEntry } from "../utilities/textRequests";

export const emptyResponse: TextEntry[] = [];

export const fullResponse: TextEntry[] = [
  {
    id: v4(),
    content: "text 1",
    created_at: "2021-06-15 09:24:05.271995",
    updated_at: "2021-06-15 09:24:05.271995",
  },
  {
    id: v4(),
    content: "text 2",
    created_at: "2021-06-14 09:24:05.271995",
    updated_at: "2021-06-14 09:24:05.271995",
  },
  {
    id: v4(),
    content: "text 3",
    created_at: "2021-06-13 09:24:05.271995",
    updated_at: "2021-06-13 09:24:05.271995",
  },
  {
    id: v4(),
    content: "text 4",
    created_at: "2021-06-12 09:24:05.271995",
    updated_at: "2021-06-12 09:24:05.271995",
  },
  {
    id: v4(),
    content: "text 5",
    created_at: "2021-06-11 09:24:05.271995",
    updated_at: "2021-06-11 09:24:05.271995",
  },
  {
    id: v4(),
    content: "text 6",
    created_at: "2021-06-10 09:24:05.271995",
    updated_at: "2021-06-10 09:24:05.271995",
  },
  {
    id: v4(),
    content: "text 7",
    created_at: "2021-06-09 09:24:05.271995",
    updated_at: "2021-06-09 09:24:05.271995",
  },
  {
    id: v4(),
    content: "text 8",
    created_at: "2021-06-08 09:24:05.271995",
    updated_at: "2021-06-08 09:24:05.271995",
  },
  {
    id: v4(),
    content: "text 9",
    created_at: "2021-06-07 09:24:05.271995",
    updated_at: "2021-06-07 09:24:05.271995",
  },
  {
    id: v4(),
    content: "text 10",
    created_at: "2021-06-06 09:24:05.271995",
    updated_at: "2021-06-06 09:24:05.271995",
  },
];
export const createSingleEntry = (textString: string): TextEntry => {
  return {
    id: v4(),
    content: textString,
    created_at: "2021-06-06 09:24:05.271995",
    updated_at: "2021-06-06 09:24:05.271995",
  };
};
