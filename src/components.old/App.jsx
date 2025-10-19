import { CitiesProvider } from "../contexts.old/CitiesContext";
import CityList from "./CityList";
import CountryList from "./CountryList";

function App() {
  return (
    <CitiesProvider>
      <CityList />
      <CountryList />
    </CitiesProvider>
  );
}

export default App;
