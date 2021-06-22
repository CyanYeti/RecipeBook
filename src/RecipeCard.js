import { Link } from 'react-router-dom';
import image from './download.jpeg';

const RecipeCard = ({recipe}) => {
    return(
        <div className="recipe-card" >
            <Link className="link" to={`/recipe/${recipe.id}`}>
                <img src={image} alt={recipe.name} />
                <h3>{recipe.name}</h3>
                <h4>{recipe.rating + " / 5 " + recipe.time}</h4>
            </Link>
        </div>
    );
}

export default RecipeCard;
