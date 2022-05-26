import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/redux-redesers';
import './Search.css';
const Search = () => {
  const filter = useSelector(state => state.todos.filter);
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor="filter"></label>
      <input
        className="searchInput"
        placeholder="Search"
        type="text"
        name="filter"
        id="filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={filter}
      ></input>
    </>
  );
};

export default Search;
