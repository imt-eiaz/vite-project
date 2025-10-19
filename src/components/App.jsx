import CitiesList from "./CitiesList";
import CountriesList from "./CountriesList";
import CitiesProvider from "../contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <CitiesList />
      <hr />
      <CountriesList />
    </CitiesProvider>
  );
}

export default App;
