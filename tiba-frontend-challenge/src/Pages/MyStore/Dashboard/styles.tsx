import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    placeItems: 'center',
    height: '60vh',
    width: '100%',
  },
  subtitle: {
    letterSpacing: '0.35em',
  },
  companyName: {
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

export default useStyles;
