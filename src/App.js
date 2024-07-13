import logo from './logo.svg';
import './App.css';
import './styles.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import RecipesGrid from './Components/RecipesGrid';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default App;
