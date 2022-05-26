import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchButton } from 'redux/redux-redesers';
import './FilterButton.css';
const FilterButton = () => {
  const [allButton, setAllButton] = useState(true);
  const [doneButton, setDoneButton] = useState(false);
  const [notDoneButton, setNotDoneButton] = useState(false);

  const dispatch = useDispatch();
  return (
    <ul className="listFilterButton">
      <li className="listItemFilterButton">
        <button
          type="button"
          className={allButton && 'filterButtonActive'}
          onClick={e => {
            e.preventDefault();
            setDoneButton(false);
            setNotDoneButton(false);
            setAllButton(true);

            dispatch(changeSearchButton('all'));
          }}
        >
          Все{' '}
        </button>
      </li>
      <li className="listItemFilterButton">
        <button
          type="button"
          className={doneButton && 'filterButtonActive'}
          onClick={e => {
            e.preventDefault();
            setAllButton(false);
            setNotDoneButton(false);

            setDoneButton(true);
            dispatch(changeSearchButton('done'));
          }}
        >
          / Выполненные
        </button>
      </li>
      <li className="listItemFilterButton">
        <button
          type="button"
          className={notDoneButton && 'filterButtonActive'}
          onClick={e => {
            e.preventDefault();
            setAllButton(false);
            setDoneButton(false);
            setNotDoneButton(true);
            dispatch(changeSearchButton('notDone'));
          }}
        >
          / Не выполненные
        </button>
      </li>
    </ul>
  );
};

export default FilterButton;
