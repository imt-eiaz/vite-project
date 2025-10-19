function CityItem({ city }) {
  const { cityName, country } = city;

  return (
    <div>
      <li>
        <h3>{cityName}</h3>
      </li>
    </div>
  );
}

export default CityItem;
