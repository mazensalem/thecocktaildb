export default async function getdata(word) {
  let data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`
  );
  const items = await data.json();
  return items.drinks || [];
}
