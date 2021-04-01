export async function getitem(id) {
  const row_data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await row_data.json();
  return {
    drink: data.drinks[0],
  };
}
