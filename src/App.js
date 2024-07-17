import './App.css';
import './styles.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import RecipesGrid from './Components/RecipesGrid';
import FavoritesList from './Components/FavoritesList';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {useState, useEffect} from "react";

export default function App() {

  const [recipes, setRecipes] = useState([]);
  const [favoritesList, setfavoritesList] = useState([]);

  useEffect(() => {
    // Fetch recipes from the backend
    fetch('http://localhost:8000/api/get-data/')
        .then(response => response.json())
        .then(data => {
            setRecipes(data);
            // setting favorites
            const favoriteIds = data.filter(recipe => recipe.favorite).map(recipe => recipe.id);
            setfavoritesList(favoriteIds);
        })
        .catch(error => console.error('Error fetching data:', error));
}, []);

  // const toggleFavorites = (recipeId) => {
  //   setfavoritesList(prev =>
  //     prev.includes(recipeId) ? prev.filter(id => id !== recipeId) : [...prev, recipeId]
  //   )
  // }

  const toggleFavorites = (recipeId) => {
    // update and reset recipes after toggle
    const updatedRecipes = recipes.map((recipe) => {
        if (recipe.id === recipeId) {
            return { ...recipe, favorite: !recipe.favorite };
        }
        return recipe;
    });
    setRecipes(updatedRecipes);

    // update and reset favorites list
    const updatedFavoritesList = updatedRecipes.filter(recipe => recipe.favorite).map(recipe => recipe.id);
    setfavoritesList(updatedFavoritesList);

    const isFavorite = updatedRecipes.find((r) => r.id === recipeId).favorite;
    fetch('http://localhost:8000/api/toggle-favorite/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: recipeId, favorite: isFavorite }),
    })
    .then(response => response.json())
    .then(data => console.log('Favorite status updated successfully:', data))
    .catch(error => console.error('Error updating favorite status:', error));
};

  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="favoritesList">Favorites</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<RecipesGrid recipes={recipes} favoritesList={favoritesList} toggleFavorites = {toggleFavorites}/>}></Route>
            <Route path='/favoritesList' element={<FavoritesList favoritesList={favoritesList} recipes={recipes} toggleFavorites = {toggleFavorites}/>}></Route>
          </Routes>
        </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}

