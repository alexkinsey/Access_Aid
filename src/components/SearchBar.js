import StyledSelectSearch from './StyledSelectSearch';
import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSubmit }) => {
  const [formSubmitValue, setFormSubmitValue] = useState('');

  const options = [
    { name: 'Low noise level', value: 'nl' },
    { name: 'High light level', value: 'll' },
    { name: 'Adequate space', value: 'as' },
    { name: 'Mobility Access', value: 'ma' },
    { name: 'Staff support', value: 'ss' },
  ];

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formSubmitValue);
    setFormSubmitValue('');
  };

  const changeSearchTerm = (event) => {
    setFormSubmitValue(event.target.value);
  };

  return (
    <>
      <form className="formcontainer" onSubmit={onSubmit}>
        <input value={formSubmitValue} className="searchbar" placeholder={'What are you looking for?'} onChange={changeSearchTerm} />

        <div className="refinements">
          <StyledSelectSearch options={options} closeOnSelect={false} id="dropdown" placeholder="Choose Refinements" multiple="true" printOptions="on-focus" />{' '}
        </div>

        <button type="submit" className="searchbutton">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
