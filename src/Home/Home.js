import SearchBar from '../SearchBar/SearchBar';
import CockTailItem from '../CockTailItem/CockTailItem';
import { dummy_data } from '../DUMMY_DATA';
import { useState } from 'react';

const Home = () => {
	const [searchElement, updateSearchElement] = useState("");

	let filteredList = dummy_data.filter((item) =>
    item.name.toLowerCase().includes(searchElement.toLowerCase())
  ).map((a) => (
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
		<SearchBar  updateSearch={updateSearchElement} />
		{filteredList}
		</>
	)
};

export default Home;