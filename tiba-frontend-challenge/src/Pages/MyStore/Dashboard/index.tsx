import { Grid } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import { useProduct } from '../../../providers/product';

import Table from '../../../components/Tables/TableDashboard';

import CardStatistic from '../../../components/CardStatistic';

import { currencyFormatter } from '../../../utils';

const HomePage = () => {
  const { listOfProducts } = useProduct();

  return (
    <Grid container spacing={4} mt={8}>
      <Grid item lg={3} md={6} xs={12}>
        <CardStatistic
          backgroundColorStaticIcon="#1f1f1E"
          title="Estoque"
          number={281}
          cardIcon={<LocalGroceryStoreIcon style={{ color: 'white' }} />}
        />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <CardStatistic
          title="Vendas"
          number={currencyFormatter.format(4200)}
          backgroundColorStaticIcon="#2C97D1"
          cardIcon={<EqualizerIcon style={{ color: 'white' }} />}
        />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <CardStatistic
          title="Usuários"
          number={133}
          backgroundColorStaticIcon="#58BB43"
          cardIcon={<GroupIcon style={{ color: 'white' }} />}
        />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <CardStatistic
          title="Seguidores"
          number={122}
          backgroundColorStaticIcon="#cc0000"
          cardIcon={<PersonIcon style={{ color: 'white' }} />}
        />
      </Grid>
      <Grid item lg={12}>
        <Table listOfProducts={listOfProducts} />
      </Grid>
    </Grid>
  );
};
export default HomePage;
