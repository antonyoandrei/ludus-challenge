import { useEffect, useState } from "react";
import "./Results.css";
import { Link } from "react-router-dom";

/**
 * Results component displays a list of cocktails and applies animation when new cocktails are fetched.
 * @param {Object[]} cocktails - An array of cocktail objects to display.
 * @param {string} cocktails[].idDrink - The unique identifier of the cocktail.
 * @param {string} cocktails[].strDrink - The name of the cocktail.
 * @param {string} cocktails[].strDrinkThumb - The URL of the cocktail image.
 */

const Results = ({ cocktails }: Props) => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setAnimation("fade-bottom 1s ease 0s 1 normal forwards");
    const timeout = setTimeout(() => {
      setAnimation("");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [cocktails]);

  return (
    <>
      <section className="results-container" style={{ animation }}>
        {cocktails.map((cocktail) => (
          <article className="card-container" key={cocktail.idDrink}>
            <Link to={`/${cocktail.idDrink}`}>
              <div
                className="card"
                style={{
                  backgroundImage: `url(${cocktail.strDrinkThumb})`,
                }}
              />
            </Link>
            <Link to={`/${cocktail.idDrink}`}>
              <p className="card-text">{cocktail.strDrink}</p>
            </Link>
          </article>
        ))}
      </section>
      {cocktails.length === 0 && (
        <h1 className="fallback-text">Start searching!</h1>
      )}
    </>
  );
};

export default Results;
