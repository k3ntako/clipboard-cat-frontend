export interface TextEntry {
  id: string;
  text_string: string;
  created_at: string;
  updated_at: string;
}

const API_URL = process.env.REACT_APP_COPY_CAT_API_URL;

export const getTexts = async (): Promise<TextEntry[]> => {
  const res = await fetch(`${API_URL}/api/texts`, {
    headers: {
      Accept: "*/*",
    },
  });
  return await res.json();
};
