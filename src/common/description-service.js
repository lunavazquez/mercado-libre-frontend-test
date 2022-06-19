export default async function descriptionServicio({ itemId }) {
  const request = await fetch(
    `https://api.mercadolibre.com/items/${itemId}/description`
  );
  const response = await request.json();

  return response;
}
