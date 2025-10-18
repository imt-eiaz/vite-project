function CityItem({ city }) {
  const { cityName, country } = city;
  return (
    <li>
      <h3>Country : {country}</h3>
      <p>Capital : {cityName}</p>
    </li>
  );
}

export default CityItem;
