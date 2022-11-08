const devBaseUrl = "http://localhost:9527/";
const proBaseUrl = "http://localhost:9527/";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseUrl : proBaseUrl;
export const TIMEOUT = 5000;
