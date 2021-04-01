export async function getpaths() {
  const row_data = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  );
  const data = await row_data.json();
  let paths = [];
  for (let drink of data.drinks) {
    paths.push({ params: { id: drink.idDrink } });
  }
  return paths;
}
