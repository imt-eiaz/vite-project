import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";

function CityList() {
  const { cities } = useCities();
  return (
    <ul>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
