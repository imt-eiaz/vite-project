import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";

function CitiesList() {
  const { cities } = useCities();
  return (
    <div>
      <ul>
        {cities.map((city) => (
          <CityItem city={city} />
        ))}
      </ul>
    </div>
  );
}

export default CitiesList;
