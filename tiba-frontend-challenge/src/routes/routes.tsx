import HomePage from '../Pages/MyStore';
import Dashboard from '../Pages/MyStore/Dashboard';
import Products from '../Pages/MyStore/Products';
import Categories from '../Pages/MyStore/Categories';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/products', element: <Products /> },
      { path: '/categories', element: <Categories /> },
      { path: '/close', element: <Products /> },
    ],
  },
];

export default routes;
