import FilterButton from 'components/FilterButton/FIlterButton';
import Search from 'components/Search/Search';
import TodoList from 'components/TodoList/TodoList';
import './MyTodos.css';
const MyContacts = () => {
  const screenWidth = window.screen.width;
  return (
    <section className="myTodos">
      <div className="wrapperMyTodos">
        <h2 className="titleMyTodos">My todos</h2>
        <Search />
      </div>
      {screenWidth >= 1400 ? <FilterButton /> : <></>}
      <TodoList />
    </section>
  );
};

export default MyContacts;
