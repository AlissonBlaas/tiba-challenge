import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { SvgIconProps } from '@mui/material';

import useStyles from './styles';

type IProps = {
  backgroundColorStaticIcon: string;
  cardIcon: SvgIconProps | React.ReactNode;
  title: string;
  number: string | number;
};

const OutlinedCard = ({
  backgroundColorStaticIcon,
  cardIcon,
  title,
  number,
}: IProps) => {
  const styleProps = { background: backgroundColorStaticIcon };
  const classes = useStyles(styleProps);
  return (
    <Card className={classes.containerCard}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box className={classes.staticIcon}>{cardIcon}</Box>
          <Box className={classes.boxStock}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" component="div" fontWeight="bold">
              {number}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body2"
          color="#58BB43"
          fontWeight="bold"
          textAlign="start"
          mt={3}
        >
          +55% nos produtos novos
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OutlinedCard;
