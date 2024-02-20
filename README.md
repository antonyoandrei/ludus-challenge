<div align="center">
  <img src="https://res.cloudinary.com/du94mex28/image/upload/v1708451418/Portfolio/Artboard_1_x9sy1r.png" alt="Cocktail App" width="400">
</div>

The project is a React application built with Vite for enhanced performance and written in TypeScript to ensure code reliability. It utilizes [The Cocktail DB API](https://www.thecocktaildb.com/api.php) to fetch cocktail data based on ingredients entered by the user. The main functionality is to search for an ingredient and display six cocktails containing that ingredient, prioritizing non-alcoholic ones. Additionally, users can click on a cocktail to view its details, including ingredients with measurements and instructions to make it.

## Features

- **The Cocktail DB API Integration**: Utilizes The Cocktail DB API to search for cocktails based on ingredients.
- **Ingredient Search**: Allows users to search for cocktails by entering an ingredient.
- **Non-Alcoholic Prioritization**: Prioritizes non-alcoholic cocktails in the search results.
- **Cocktail Details**: Displays detailed information about each cocktail, including ingredients with measurements and instructions.
- **React Router**: Utilizes React Router DOM to maintain a single-page application while providing routing functionality.
- **Toaster Notifications**: Utilizes a toaster library like Sonner to provide simple notifications for better user experience.
- **TypeScript**: Written in TypeScript for type safety and better developer experience.
- **Deployment**: Deployed on a platform like Netlify for easy access and usage.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/antonyoandrei/ludus-challenge
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm run dev
   ```

4. Access the application at `http://localhost:5173`.

## Usage

- Enter an ingredient in the search bar to find cocktails containing that ingredient.
- Click on a cocktail to view its details, including ingredients with measurements and instructions.

## Future Improvements

As for future improvements, there are several avenues to explore for enhancing the application further. One potential improvement is to implement user authentication and allow users to save their favorite cocktails or create custom cocktail lists. Additionally, adding more advanced search options, such as searching by cocktail name or category, could enhance the user experience and make the application more versatile.
