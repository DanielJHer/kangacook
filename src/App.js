import './App.css';
import './styles.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import RecipesGrid from './Components/RecipesGrid';
import FavoritesList from './Components/FavoritesList';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {useState, useEffect} from "react";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [favoritesList, setfavoritesList] = useState([]);

  useEffect(()=> {
    fetch("recipes.json")
    .then(response => response.json())
    .then(data => setRecipes(data))
}, []);

  const toggleFavorites = (recipeId) => {
    setfavoritesList(prev =>
      prev.includes(recipeId) ? prev.filter(id => id !== recipeId) : [...prev, recipeId]
    )
  }

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

export default App;