export async function fetchCatFromApi() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?size=full');
  const data = await response.json();
  return data[0]?.url || '';
} 