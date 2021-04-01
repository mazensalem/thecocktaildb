export default function getin(drink) {
  let ingredients = [];
  for (let i = 1; i < 16; i++) {
    if (drink[`strIngredient${i}`]) {
      ingredients.push(drink[`strIngredient${i}`]);
    } else {
      break;
    }
  }
  return ingredients;
}
