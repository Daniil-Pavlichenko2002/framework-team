import searchImage from '../../assets/img/search.svg';
import searchDark from '../../assets/img/searchDark.svg';
import close from '../../assets/img/close.svg';
import closeDark from '../../assets/img/closeDark.svg';
import style from './Search.module.scss';
import { ChangeEvent, useContext } from 'react';
import { DarkThemeContext } from '../../App';

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const Search = ({ search, setSearch }: Props) => {
  const context = useContext(DarkThemeContext);

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={style.searchContainer}>
      <div className={style.search}>
        <img
          src={context?.isDarkTheme ? searchDark : searchImage}
          className={style.searchIcon}
          alt="search"
        />
        <input
          value={search}
          onChange={searchChange}
          className={`${style.input} ${context?.isDarkTheme ? style.darkInput : ''}`}
          type="text"
          placeholder="Painting title"
        />
        {search && (
          <img
            onClick={() => setSearch('')}
            className={style.close}
            src={context?.isDarkTheme ? closeDark : close}
            alt="close"
          />
        )}
      </div>
    </div>
  );
};

export default Search;
