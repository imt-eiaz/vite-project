import CountriesList from "./CountriesList";

function CountriesList({ cities }) {
  return (
    <ul>
      {cities.map((city) => (
        <CountriesList city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountriesList;
