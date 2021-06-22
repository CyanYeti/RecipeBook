import Recipelist from "./Recipelist";

const Home = ({recipes}) => {

    return (
        <div className="home">
            {recipes && <Recipelist recipes={recipes} />}
        </div>
    );
}

export default Home;
