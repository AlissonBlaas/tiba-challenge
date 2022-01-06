import { Box, Typography, Divider, Button, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LogoutIcon from '@mui/icons-material/Logout';

import useStyles from './styles';

type MyType = {
  id: number;
  route: string;
  text: string;
  icon: React.ReactElement;
};

type MyGroupType = {
  buttons: MyType[];
};
const LeftSideContainer = ({ buttons }: MyGroupType) => {
  const location = useLocation();
  const history = useNavigate();

  const onClickButton = (item: string) => {
    history(item);
  };
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Stack flexDirection="row">
        <AddBusinessIcon style={{ color: 'white' }} />
        <Typography fontSize={14} color="white" mb={2} ml={1} fontWeight="bold">
          Minha loja
        </Typography>
      </Stack>

      <Divider style={{ width: '100%', background: 'grey' }} />
      <Box display="flex" flexDirection="column" mt={4}>
        {buttons.map(content => (
          <Button
            key={content.id}
            className={classes.button}
            startIcon={content.icon}
            onClick={() => onClickButton(content.route)}
            style={{
              backgroundColor:
                content.route !== location.pathname ? 'transparent' : '#2C97D1',
            }}
          >
            {content.text}
          </Button>
        ))}
        <Button className={classes.button} startIcon={<LogoutIcon />}>
          Sair
        </Button>
      </Box>
    </Box>
  );
};
export default LeftSideContainer;
