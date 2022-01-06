import { ReactChildren, ReactChild } from 'react';
import { Theme } from '@mui/system';
import { Box, Grid, useMediaQuery } from '@mui/material';

import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ListAltIcon from '@mui/icons-material/ListAlt';

import Header from '../../components/Header';

import Modal from '../../components/ModalProductDetails';

import LeftSideContainer from './LeftSideContainer';

interface RightSideChildrenProps {
  children: ReactChild | ReactChildren;
}

const buttons = [
  { id: 1, route: '/', text: 'Dashboard', icon: <AutoAwesomeMosaicIcon /> },
  {
    id: 2,
    route: '/products',
    text: 'Produtos',
    icon: <Inventory2Icon />,
  },
  {
    id: 3,
    route: '/categories',
    text: 'Categorias',
    icon: <ListAltIcon />,
  },
];

const MainTemplate = ({ children }: RightSideChildrenProps) => {
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  return (
    <Grid container height={isSmall ? '100%' : '100vh'} p={2}>
      <Modal />
      <Grid item lg={2}>
        {!isSmall && <LeftSideContainer buttons={buttons} />}
      </Grid>
      <Grid item lg={10}>
        <Header />
        <Box m={2}>{children}</Box>
      </Grid>
    </Grid>
  );
};
export default MainTemplate;
