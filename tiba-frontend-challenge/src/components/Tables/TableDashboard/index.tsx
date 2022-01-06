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
  AvatarGroup,
  Avatar,
} from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';

import Progress from '../../Progress';

import { currencyFormatter } from '../../../utils';

import TreeDotsMenu from '../../TreeDotsMenu';

import useStyles from './styles';

type IPropsProducts = {
  name: string;
  value: number;
  quantity: number;
};

type IProps = {
  listOfProducts: IPropsProducts[] | null;
};

const AcccessibleTable = ({ listOfProducts }: IProps) => {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      style={{ padding: '20px 20px 0 20px' }}
      sx={{ overflow: 'revert' }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box textAlign="start" m={2}>
          <Typography fontWeight="bold">Vendas</Typography>
          <Box display="flex" alignItems="center">
            <CheckIcon color="success" width={5} />
            <Typography fontSize={14} mt={1}>
              <strong style={{ marginRight: 5 }}>30 vendidos</strong>
              este mês
            </Typography>
          </Box>
        </Box>
        <TreeDotsMenu />
      </Box>

      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>
              PRODUTOS VENDIDOS
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              CLIENTES
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              VALOR
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              TOTAL ESTOQUE
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
                {content.name}
              </TableCell>
              <TableCell align="right">
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold' }}>
                {currencyFormatter.format(content.value)}
              </TableCell>
              <TableCell align="right" width={250}>
                <Stack flexDirection="row" alignItems="center">
                  <Progress progressValue={content.quantity} />
                  <Typography fontSize={14} ml={2} fontWeight="bold">
                    {content.quantity}
                  </Typography>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AcccessibleTable;
