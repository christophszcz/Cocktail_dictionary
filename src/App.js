import './App.css';
import About from "./About/About";
import NavBar from './NavBar/NavBar'
import { Route, Switch } from "react-router-dom";
import Details from './Details/CocktailDetails.js';
import Home from './Home/Home';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
            <Details />
          </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
