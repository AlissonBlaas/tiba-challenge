import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    padding: 40,
    borderRadius: 10,
    background: '#191A19',
    height: '100%',
    maxWidth: 300,
    textAlign: 'start',
    '@media(max-width: 768px)': {
      padding: 10,
    },
  },
  button: {
    textTransform: 'none',
    color: 'white',
    justifyContent: 'start',
  },
});

export default useStyles;
