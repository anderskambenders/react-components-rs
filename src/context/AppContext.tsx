import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface IContextProvider {
  children: ReactNode;
}

interface IContext {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<IContext>({
  searchValue: '',
  setSearchValue: () => {},
});

export const AppContextProvider: FC<IContextProvider> = ({ children }) => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('valueKey') || ''
  );

  const props = {
    searchValue,
    setSearchValue,
  };

  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};
