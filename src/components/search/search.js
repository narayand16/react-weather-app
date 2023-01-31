import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_BASE_URL, geoApiOptions } from "../../service/api-handler";

const Search = ({ onSearchChange }) => {
  const [searchText, setSearchText] = useState();

  const onChangeHandler = (searchQuery) => {
    setSearchText(searchQuery);
    onSearchChange(searchQuery);
  };
  const loadOptions = (inputVal) => {
    return fetch(
      `${GEO_API_BASE_URL}/cities?namePrefix=${inputVal}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((results) => ({
        options: results.data.map((city) => ({
          label: `${city.name}, ${city.countryCode}`,
          value: `${city.latitude}, ${city.longitude}`,
        })),
      }))
      .catch((error) => console.log(error));
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      loadOptions={loadOptions}
      debounceTimeout={500}
      value={searchText}
      onChange={onChangeHandler}
    />
  );
};

export default Search;
