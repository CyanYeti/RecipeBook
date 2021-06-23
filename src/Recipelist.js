import RecipeCard from './RecipeCard';

const Recipelist = ({recipes}) => {

    return (
        <div className="card-window">
            { recipes.map((recipe) => (
                <RecipeCard recipe={recipe}/>
            ))}
        </div>
    );
}

export default Recipelist;
