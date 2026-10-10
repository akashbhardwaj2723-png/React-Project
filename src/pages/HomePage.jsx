
import ResultGrid from "../component/ResultGrid";
import SearchBar from "../component/SearchBar";
import Tabs from "../component/Tab";
import { useSelector } from "react-redux";


const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  console.log(query);

  return (
    <div>
      
      <SearchBar />
      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
