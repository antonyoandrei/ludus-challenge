import { useCocktailContext } from "../../context/Context";
import Results from "../../components/Results/Results";
import Searchbar from "../../components/Searchbar/Searchbar";
import axios from "axios";
import { toast } from "sonner";

/**
 * Homepage component for displaying search bar and cocktail results.
 * @returns JSX element
 */

const Homepage = () => {
  const { cocktails, setCocktails } = useCocktailContext();

  const searchCocktails = async (ingredient: string) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const { drinks } = response.data;
      if (!drinks) {
        toast.error("No cocktails found.");
        return;
      }

      if (!ingredient) {
        toast.error("You have to write something!");
        return;
      }

      const limitedDrinks = drinks.slice(0, 20);

      const detailedCocktails = await Promise.all(
        limitedDrinks.map(async (cocktail: { idDrink: any }) => {
          const detailResponse = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
          );
          return detailResponse.data.drinks[0];
        })
      );

      const nonAlcoholicCocktails = detailedCocktails.filter(
        (cocktail: { strAlcoholic: string }) =>
          cocktail.strAlcoholic === "Non alcoholic"
      );

      const alcoholicCocktails = detailedCocktails.filter(
        (cocktail: { strAlcoholic: string }) =>
          cocktail.strAlcoholic !== "Non alcoholic"
      );

      const filteredCocktails =
        nonAlcoholicCocktails.concat(alcoholicCocktails);

      const sortedAlcohol = filteredCocktails.sort(
        (a: { strAlcoholic: string }, b: { strAlcoholic: string }) => {
          if (a.strAlcoholic === "Non alcoholic") return -1;
          if (b.strAlcoholic === "Non alcoholic") return 1;
          return 0;
        }
      );

      const sortedIngredients = sortedAlcohol.filter(
        (cocktail: { [x: string]: any }) => {
          const ingredients = [];
          for (let i = 1; i <= 15; i++) {
            if (cocktail[`strIngredient${i}`]) {
              ingredients.push(cocktail[`strIngredient${i}`]);
            }
          }
          return ingredients.length <= 6;
        }
      );

      const limitedCocktails = sortedIngredients.slice(0, 6);
      setCocktails(limitedCocktails);
      toast.success("Cocktails found!");
    } catch (error) {
      console.error("Error fetching cocktails:", error);
    }
  };

  return (
    <>
      <Searchbar onSearch={searchCocktails} />
      <Results cocktails={cocktails} />
    </>
  );
};

export default Homepage;
