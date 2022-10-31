import "./App.css";
import About from "./About/About";
import NavBar from './NavBar/NavBar.js';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </>
  );
}

export default App;
