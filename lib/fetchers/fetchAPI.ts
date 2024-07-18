/**
 * Sends a request to the specified URL with the provided options and user credentials
 *
 * @param {string} url - The URL to send the request to
 * @param {Object} options - The options to use for the request
 *
 * @returns {Promise<Response>} - A promise that resolves with the response if the request is successful, or rejects with the response if the request fails
 */
export const fetchAPI = async (
  url: string,
  options?: RequestInit
): Promise<Response> => {
  // Send the request to the specified URL with the provided options and user credentials
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });
};
