import { apiFetcher } from "./apiFetcher";

export interface TextEntry {
  id: string;
  text_string: string;
  created_at: string;
  updated_at: string;
}

export const getTexts = (): Promise<TextEntry[]> => {
  return apiFetcher("/api/texts");
};
