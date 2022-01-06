import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

type IProps = {
  background: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  containerCard: {
    overflow: 'revert',
    maxWidth: 500,
    boxShadow: `0 1px 2px rgba(0,0,0,0.07), 
    0 2px 4px rgba(0,0,0,0.07), 
    0 4px 8px rgba(0,0,0,0.07), 
    0 8px 16px rgba(0,0,0,0.07),
    0 16px 32px rgba(0,0,0,0.07), 
    0 32px 64px rgba(0,0,0,0.07)`,
    [theme.breakpoints.down('md')]: {
      maxWidth: 'none',
    },
  },
  staticIcon: {
    position: 'relative',
    top: -40,
    display: 'grid',
    placeItems: 'center',
    background: (props: IProps) => props.background,
    borderRadius: 10,
    width: 60,
    height: 60,
    boxShadow: `0 1px 2px rgba(0,0,0,0.07), 
    0 2px 4px rgba(0,0,0,0.07), 
    0 4px 8px rgba(0,0,0,0.07), 
    0 8px 16px rgba(0,0,0,0.07),
    0 16px 32px rgba(0,0,0,0.07), 
    0 32px 64px rgba(0,0,0,0.07)`,
  },
  boxStock: {
    textAlign: 'end',
  },
}));

export default useStyles;
