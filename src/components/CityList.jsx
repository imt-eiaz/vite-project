import CityItem from "./CityItem";

function CityList({ cities }) {
  return (
    <ul>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
