import { CitiesProvider } from "../contexts/CitiesContext";
import CitiesList from "./CitiesList";
import CountriesList from "./CountriesList";

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
