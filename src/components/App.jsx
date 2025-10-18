import { CitiesProvider } from "../contexts/CitiesContext";
import CityList from "./CityList";
import CountryList from "./CountryList";

function App() {
  return (
    <CitiesProvider>
      <h2>Here is Cities List</h2>
      <CityList />
      <br />
      <h2>Here is Countries List</h2>
      <CountryList />
    </CitiesProvider>
  );
}

export default App;
