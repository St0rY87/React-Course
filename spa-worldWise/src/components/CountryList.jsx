// import Spinner from "./Spinner";
// import Message from "./Message";
// import styles from "./CountryList.module.css";
// import CountryItem from "./CountryItem";
// import { useCities } from "../contexts/CitiesContext";

// function CountryList() {
//   const { cities, isLoading } = useCities();
//   if (isLoading) return <Spinner />;
//   console.log(cities);

//   if (!cities.length)
//     return (
//       <Message message="Add your first city by clicking on a city on the map" />
//     );

//   const countries = cities.reduce((arr, city) => {
//     if (!arr.map((el) => el.country).includes(city.country)) {
//       return [...arr, { country: city.country, emoji: city.emoji }];
//     } else return arr;
//   }, []);

//   return (
//     <ul className={styles.countryList}>
//       {countries.map((country) => (
//         <CountryItem country={country} key={country.id} />
//       ))}
//     </ul>
//   );
// }

// export default CountryList;

import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (arr.some((el) => el.country === city.country)) return arr;
    return [...arr, { country: city.country, emoji: city.emoji }];
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
