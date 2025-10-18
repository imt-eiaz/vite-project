import { useEffect, useState } from "react";
import CityList from "./CityList";
import CountryList from "./CountryList";

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <div>
      <h2>Here is Cities List</h2>
      <CityList cities={cities} />
      <br />
      <h2>Here is Countries List</h2>
      <CountryList cities={cities} />
    </div>
  );
}

export default App;
