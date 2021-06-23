import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Recipe Book</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="friends">Friends</Link>
                <Link to="my-recipes">My Recipes</Link>
                <Link to="following">Following</Link>
                <Link to="search">Search</Link>
            </div>
        </nav>
    );

}

export default Navbar;
