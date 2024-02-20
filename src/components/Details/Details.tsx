import "./Details.css";
import back from "../../assets/reply.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailsComponent = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setAnimation("fade-top 1s ease 0s 1 normal forwards");
    const timeout = setTimeout(() => {
      setAnimation("");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const fetchCocktailDetails = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setCocktail(data.drinks[0] as Cocktail);
    };

    fetchCocktailDetails();
  }, [id]);

  return (
    <>
      <button onClick={() => history.back()} className="back">
        <img src={back} alt="back-svg" className="back-icon" />
      </button>
      {cocktail && (
        <section className="details-container" style={{ animation }}>
          <article className="main-container">
            <p className="main-text">{cocktail.strDrink}</p>
            <div className="flex-wrapper">
              <div
                className="main-picture"
                style={{
                  backgroundImage: `url(${cocktail.strDrinkThumb})`,
                }}
              />
              <div className="main-tag">
                {cocktail.strAlcoholic === "Alcoholic"
                  ? "Alcoholic"
                  : "Non-Alcoholic"}
              </div>
            </div>
          </article>
          <article className="info-container">
            <div className="ingredients-container">
              <p className="main-text">Ingredients</p>
              {Array.from({ length: 15 }, (_, i) => i + 1).map((index) => {
                const ingredient = cocktail[`strIngredient${index}`];
                const measure = cocktail[`strMeasure${index}`];
                if (ingredient && measure) {
                  return (
                    <p className="info-text" key={index}>
                      {measure} {ingredient}
                    </p>
                  );
                }
                return null;
              })}
            </div>
            <div className="instructions-container">
              <p className="main-text">Instructions</p>
              <p className="info-text">{cocktail.strInstructions}</p>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default DetailsComponent;
