import { Grid } from '@mui/material';

import { useProduct } from '../../../providers/product';
import TableProducts from '../../../components/Tables/TableProducts';

const HomePage = () => {
  const { listOfProducts } = useProduct();
  return (
    <Grid container spacing={2} mt={8}>
      <Grid item lg={12}>
        <TableProducts listOfProducts={listOfProducts} />
      </Grid>
    </Grid>
  );
};
export default HomePage;
