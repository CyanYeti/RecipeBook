import './App.css';
import Navbar from './Navbar';
import TopRecipes from './TopRecipes';
import RecipeCard from './RecipeCard';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

    let recipes = [
        {id: 1, name: "Pizza", rating: "3", time: "45 min", image: "./download.jpeg"},
        {id: 2, name: "Steak", rating: "2", time: "30 min", image: "./download.jpeg"},
        {id: 3, name: "Bread", rating: "4", time: "1 hr", image: "./download.jpeg"},
        {id: 4, name: "Soup", rating: "1", time: "50 min", image: "./download.jpeg"},
        {id: 5, name: "Salad", rating: "1", time: "15 min", image: "./download.jpeg"},
        {id: 6, name: "Fish", rating: "2", time: "1.5 hr", image: "./download.jpeg"},
        {id: 7, name: "Sushi", rating: "4", time: "45 min", image: "./download.jpeg"},
        {id: 8, name: "Mexican", rating: "5", time: "25 min", image: "./download.jpeg"},
        {id: 9, name: "Pasta", rating: "2", time: "15 min", image: "./download.jpeg"},
        {id: 10, name: "Dessert", rating: "3", time: "1 hr", image: "./download.jpeg"},
        {id: 11, name: "Pastry", rating: "4", time: "30 min", image: "./download.jpeg"}
    ]

  return (
      <Router>
        <div className="App">
            <Navbar />
            <TopRecipes recipes={recipes}/>
            <Home recipes={recipes}/>
        </div>
      </Router>
  );
}

export default App;
