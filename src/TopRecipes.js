import RecipeListing from './RecipeListing';
import RecipeCard from './RecipeCard';

const TopRecipes = ({ recipes }) => {
    return (
        <div className="top-recipes">
            <h2>Top Recipes</h2>
            <RecipeCard recipe={recipes[1]} />
            <RecipeListing />
            <RecipeListing />
            <RecipeListing />
            <RecipeListing />
        </div>
    );
}

export default TopRecipes;
