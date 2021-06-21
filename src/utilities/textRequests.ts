import { apiFetcher } from "./apiFetcher";

export interface TextEntry {
  id: string;
  text_string: string;
  created_at: string;
  updated_at: string;
}

export interface TextRequests {
  getTexts: () => Promise<TextEntry[]>;
  uploadText: (textString: string) => Promise<TextEntry>;
}

export const getTexts = (): Promise<TextEntry[]> => {
  return apiFetcher("/api/texts");
};

export const uploadText = (textString: string): Promise<TextEntry> => {
  return apiFetcher("/api/texts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text_string: textString,
    }),
  });
};
