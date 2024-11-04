import { useDispatch, useSelector } from 'react-redux';

import css from './SearchBox.module.css';
import { setFilterContact } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleFilterChange = value => {
    dispatch(setFilterContact(value));
  };

  return (
    <div className={css.searchWrapper}>
      <p>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={event => handleFilterChange(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
