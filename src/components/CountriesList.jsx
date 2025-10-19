import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";

function CountriesList() {
  const { cities } = useCities();

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountriesList;
