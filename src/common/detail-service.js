export default async function detailService({ itemId }) {
  const request = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
  const response = await request.json();
  console.log({ id: response });

  return response;
}
