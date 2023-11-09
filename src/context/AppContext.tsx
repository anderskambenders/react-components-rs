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
}

export const AppContext = createContext<IContext>({
  searchValue: '',
  setSearchValue: () => {},
  products: [],
  setProducts: () => {},
});

export const AppContextProvider: FC<IContextProvider> = ({ children }) => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('valueKey') || ''
  );
  const [products, setProducts] = useState<Product[]>([]);

  const props = {
    searchValue,
    setSearchValue,
    products,
    setProducts,
  };

  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};
