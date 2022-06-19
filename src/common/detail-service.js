export default async function detailService({ itemId }) {
  const request = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
  const response = await request.json();

  return response;
}
