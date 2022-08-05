import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries, fetchData, fetchDaily, getCountry } from '../redux/covidSlice/covidSlice';

function Dropdown() {
  const [country, setCountry] = useState('');
  const countries = useSelector((state) => state.covid.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) dispatch(fetchCountries());
    dispatch(fetchDaily());
    dispatch(fetchData(country));
    dispatch(getCountry(country));
  }, [dispatch, country, countries]);

  return (
    <select value={country} onChange={(e) => setCountry(e.target.value)}>
      <option value="">Global</option>
      {countries.length > 0 &&
        countries.map((country, i) => (
          <option key={i} value={country.iso2}>
            {country.name}
          </option>
        ))}
    </select>
  );
}

export default Dropdown;