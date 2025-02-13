import { useContext } from 'react';
import logo from '../../../public/img/logo.svg';
import logoDark from '../../../public/img/logoDark.svg';
import imageBtn from '../../../public/img/themeBtnImage.svg';
import imageBtnDark from '../../../public/img/theme=lightOn, state=Hover.svg';
import style from './Header.module.scss';
import { DarkThemeContext } from '../../App';

const Header = () => {
  const context = useContext(DarkThemeContext);
  return (
    <header>
      <div className="container">
        <div className={style.row}>
          <a href="#">
            <img src={context?.isDarkTheme ? logoDark : logo} alt="logo" />
          </a>
          <button
            className={context?.isDarkTheme ? '' : style.themeBtn}
            onClick={() => context?.setIsDarkTheme(!context?.isDarkTheme)}
          >
            <img
              src={context?.isDarkTheme ? imageBtnDark : imageBtn}
              alt="theme"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
