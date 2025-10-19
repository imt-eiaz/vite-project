import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";

function CitiesList() {
  const { cities } = useCities();
  return (
    <div>
      {cities.map((city) => (
        <CityItem city={city} />
      ))}
    </div>
  );
}

export default CitiesList;
