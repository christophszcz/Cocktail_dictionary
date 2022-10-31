import CockTailItem from './CockTailItem/CockTailItem';
import { dummy_data } from './DUMMY_DATA';

const Home = () => {
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
		{filteredList}
	)
};

export default Home;