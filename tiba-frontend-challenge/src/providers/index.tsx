import { ReactChildren, ReactChild } from 'react';

import { ProductProvider } from './product';
import { ModalProvider } from './modals';

interface TsxProps {
  children: ReactChildren | ReactChild;
}

const AppProvider = ({ children }: TsxProps) => (
  <ProductProvider>
    <ModalProvider>{children}</ModalProvider>
  </ProductProvider>
);

export default AppProvider;
