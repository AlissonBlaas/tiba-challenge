import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import moment from 'moment';

import { useProduct } from '../../../providers/product';

import { useModal } from '../../../providers/modals';

import Chip from '../../Chip';

import useStyles from './styles';

type IPropsCategory = {
  name: string;
};

type IPropsProducts = {
  name: string;
  description: string;
  created_at: string;
  status: string;
  category: IPropsCategory;
  id: string;
};

type IProps = {
  listOfProducts: IPropsProducts[] | null;
};

const AcccessibleTable = ({ listOfProducts }: IProps) => {
  const classes = useStyles();
  const { setOpenModal } = useModal();
  const { fetchProductByid } = useProduct();

  const onClickItem = (id: string) => {
    setOpenModal(true);
    fetchProductByid(id);
  };

  return (
    <TableContainer
      component={Paper}
      style={{ padding: '20px 20px 0 20px' }}
      sx={{ overflow: 'revert' }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        className={classes.topbar}
      >
        <Typography fontWeight="bold">Produtos</Typography>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>PRODUTOS</TableCell>
            <TableCell align="right" className={classes.tableCell}>
              CATEGORIA
            </TableCell>
            <TableCell align="right" className={classes.tableCell}>
              STATUS
            </TableCell>
            <TableCell align="right" className={classes.tableCell}>
              CADASTRO EM
            </TableCell>
            <TableCell align="right" className={classes.tableCell}>
              AÇÃO
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listOfProducts?.map(content => (
            <TableRow key={content.name}>
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: 'bold' }}
              >
                <Button onClick={() => onClickItem(content.id)}>
                  <Stack flexDirection="row" alignItems="center">
                    <img
                      alt=""
                      src="https://images.lojanike.com.br/1200x630/produto/tenis-nike-revolution-5-icon-clash-feminino-BQ3207-002-1.jpg"
                      className={classes.imageProduct}
                    />
                    <Box display="flex" flexDirection="column">
                      <Typography fontWeight="bold" style={{ color: 'black' }}>
                        {content.name}
                      </Typography>
                      <Typography style={{ color: 'black' }}>
                        {content.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Button>
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold' }}>
                {content.category.name}
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold' }}>
                <Chip label={content.status} />
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold' }}>
                {moment(content.created_at).format('DD/MM/YY')}
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold' }}>
                <Button variant="text">Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AcccessibleTable;
