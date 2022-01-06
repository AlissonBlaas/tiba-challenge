import {
  createContext,
  useContext,
  useState,
  ReactChildren,
  ReactChild,
  useCallback,
} from 'react';

import api from '../services/api';

interface TsxProps {
  children: ReactChildren | ReactChild;
}

interface IProductProps {
  [key: string]: string;
}

export type ProductContextData = {
  listOfProducts: [] | null;
  fetchListOfProducts(): void;
  fetchProductByid(productId: string): void;
  children?: ReactChildren | ReactChild;
  isLoading: boolean;
  product?: IProductProps | null;
};

const ProductHooksContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

export const ProductProvider = ({ children }: TsxProps) => {
  const [listOfProducts, setListOfProducts] = useState<[] | null>([]);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchListOfProducts = useCallback(() => {
    setIsLoading(true);
    api
      .get('/products')
      .then(response => {
        setListOfProducts(response.data);
        setIsLoading(false);
      })
      .catch(({ error }) => {
        setIsLoading(false);
        return error.response;
      });
  }, []);

  const fetchProductByid = useCallback(productId => {
    setIsLoading(true);
    api
      .get(`/product/${productId}`)
      .then(response => {
        setProduct(response.data[0]);
        setIsLoading(false);
      })
      .catch(({ error }) => {
        setIsLoading(false);
        return error.response;
      });
  }, []);

  return (
    <ProductHooksContext.Provider
      value={{
        product,
        listOfProducts,
        fetchProductByid,
        fetchListOfProducts,
        isLoading,
      }}
    >
      {children}
    </ProductHooksContext.Provider>
  );
};

export function useProduct() {
  const context = useContext(ProductHooksContext);

  if (!context) {
    throw new Error('useProduct must be use within an defaultHooksProvider');
  }

  return context;
}
