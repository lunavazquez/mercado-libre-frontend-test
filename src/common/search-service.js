export default async function searchService({ searchText, limit = 4 }) {
  const request = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${searchText}&limit=${limit}`
  );
  const response = await request.json();

  return response.results || [];
}
