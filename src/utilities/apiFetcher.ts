const API_URL = process.env.REACT_APP_COPY_CAT_API_URL;

export const apiFetcher = async (
  route: string,
  params: RequestInit = {}
): Promise<any> => {
  const res = await fetch(API_URL + route, {
    headers: {
      Accept: "*/*",
    },
    ...params,
  });
  return await res.json();
};
