import "./App.css";
import Search from "./components/search/search";

function App() {
  const searchChangeHandler = (searchQuery) => {
    console.log(searchQuery);
  };
  return (
    <div className="container">
      <Search onSearchChange={searchChangeHandler} />
    </div>
  );
}

export default App;
