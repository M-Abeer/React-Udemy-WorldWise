import styles from "./CityItem.module.css";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
// eslint-disable-next-line react/prop-types
function CityItem({ city }) {
  console.log(city);
  //   const { cityName, emoji, date } = city;
  //   console.log(cityName, emoji, date);
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{city.emoji}</span>
      <h3 className={styles.name}>{city.cityName}</h3>
      <time className="styles.date">{formatDate(city.date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
