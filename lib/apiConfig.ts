export const SPORTS_API_BASE_URL = process.env.SPORTS_API_BASE_URL || "https://api.example.com";

export const getHeaders = () => ({
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin': '*'
});
