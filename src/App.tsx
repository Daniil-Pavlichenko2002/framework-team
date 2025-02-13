import { createContext, useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';

export interface IContext {
  isDarkTheme: boolean
  setIsDarkTheme: (value: boolean) => void
}

export const DarkThemeContext = createContext<IContext | null>(null)

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkTheme);
  }, [isDarkTheme]);
  return (
    <DarkThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
      <Header />
      <Main />
    </DarkThemeContext.Provider>
  );
}

export default App;
