function CityItem({ city }) {
  const { cityName, country } = city;
  return (
    <li>
      <h1>Country : {country}</h1>
      <p>Capital : {cityName}</p>
    </li>
  );
}

export default CityItem;
