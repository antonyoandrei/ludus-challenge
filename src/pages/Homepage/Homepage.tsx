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

      if (drinks) {
        toast.success("Cocktails found!");
      } else {
        toast.error("No cocktails found.");
      }

      const nonAlcoholicCocktails = drinks.filter(
        (cocktail: { strAlcoholic: string }) =>
          cocktail.strAlcoholic === "Non_Alcoholic"
      );

      const alcoholicCocktails = drinks.filter(
        (cocktail: { strAlcoholic: string }) =>
          cocktail.strAlcoholic !== "Non_Alcoholic"
      );

      const filteredCocktails =
        nonAlcoholicCocktails.concat(alcoholicCocktails);

      const limitedCocktails = filteredCocktails.slice(0, 6);
      setCocktails(limitedCocktails);
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
