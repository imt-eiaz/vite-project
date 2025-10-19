import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";

function CountriesList() {
  const { cities } = useCities();
  return (
    <div>
      {cities.map((city) => (
        <CountryItem city={city} />
      ))}
    </div>
  );
}

export default CountriesList;
