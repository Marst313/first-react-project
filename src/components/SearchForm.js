import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchContainer = React.useRef('');

  React.useEffect(() => {
    searchContainer.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchContainer.current.value);
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" id="name" ref={searchContainer} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
