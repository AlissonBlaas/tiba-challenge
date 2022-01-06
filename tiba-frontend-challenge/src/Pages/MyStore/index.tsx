import { useEffect } from 'react';
import { Outlet } from 'react-router';

import { useProduct } from '../../providers/product';

import MainTemplate from '../../Templates/mainTemplate';

const HomePage = () => {
  const { fetchListOfProducts } = useProduct();

  useEffect(() => {
    fetchListOfProducts();
  }, [fetchListOfProducts]);

  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
};
export default HomePage;
