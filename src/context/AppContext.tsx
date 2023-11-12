import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { Product } from '../components/types';

interface IContextProvider {
  children: ReactNode;
}

interface IContext {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  products: Array<Product>;
  setProducts: Dispatch<SetStateAction<Product[]>>;
  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<IContext>({
  searchValue: '',
  setSearchValue: () => {},
  products: [],
  setProducts: () => {},
  isLoaded: false,
  setIsLoaded: () => {},
});

export const AppContextProvider: FC<IContextProvider> = ({ children }) => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('valueKey') || ''
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const props = {
    searchValue,
    setSearchValue,
    products,
    setProducts,
    isLoaded,
    setIsLoaded,
  };

  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};
