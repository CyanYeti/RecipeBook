import { Link } from 'react-router-dom';

const RecipeListing = () => {
    return (
        <div className="recipe-listing">
            <h3><Link className="link" to="recipe id">{ " Recipe Name\nRating 30 min"}</Link></h3>
        </div>
    );
}

export default RecipeListing;
