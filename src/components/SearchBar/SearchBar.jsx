import css from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({handleFormSubmit}) => {
  const [inputValue, setInputValue] = useState(null);

  const handleSearchParamChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === '') {
      return alert('Enter or change your search query');
    }
    handleFormSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
      className={css.formInput}
        type="text"
        autoComplete="off"
        autoFocus
        onChange={handleSearchParamChange}
      />
      <button className={css.formBtn} type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
