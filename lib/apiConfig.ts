export const SPORTS_API_BASE_URL = process.env.SPORTS_API_BASE_URL;

export const getHeaders = () => ({
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin': '*'
});
