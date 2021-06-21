const API_URL = process.env.REACT_APP_COPY_CAT_API_URL;

export const apiFetcher = async (
  route: string,
  params: RequestInit = {}
): Promise<any> => {
  const headers = params.headers || {};
  delete params.headers;

  const res = await fetch(API_URL + route, {
    headers: {
      Accept: "*/*",
      ...headers,
    },
    ...params,
  });
  return await res.json();
};
