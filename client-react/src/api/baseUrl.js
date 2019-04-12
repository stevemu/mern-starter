export default function getBaseUrl() {
  let baseUrl = process.env.API_BASE_URL || 'http://localhost:5000';
  console.log('base url ' + baseUrl);
  return baseUrl;
}
