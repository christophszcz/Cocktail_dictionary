import './App.css';
import CockTailItem from './CockTailItem/CockTailItem';
import { dummy_data } from './DUMMY_DATA';
import About from "./About/About";
import NavBar from './NavBar/NavBar'
import { Route, Switch } from "react-router-dom";
import Details from './Details/CocktailDetails.js';

function App() {


  let filteredList = dummy_data.map((a) => (
    <CockTailItem
      id={a.id}
      name={a.name}
      imageName={a.imageName}
      glass={a.glass}
      info={a.info}
    />
  ));


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
          {filteredList}
        </Route>
      </Switch>
    </>
  );
}

export default App;
