import './App.css';
import CockTailItem from './CockTailItem/CockTailItem';
import { dummy_data } from './DUMMY_DATA';
import NavBar from './NavBar/NavBar.js';

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
    <div className="App">
      <NavBar/>
      {filteredList}
    </div>
  );
}

export default App;
