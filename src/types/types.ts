interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  [key: string]: string;
}

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface Props {
  cocktails: Cocktail[];
}
