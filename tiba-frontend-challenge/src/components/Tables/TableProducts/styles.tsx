import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  topbar: {
    position: 'relative',
    top: -50,
    display: 'flex',
    alignItems: 'center',
    height: 80,
    flexGrow: 1,
    background: '#2C97D1',
    borderRadius: 10,
    padding: 10,
    color: 'white',
    boxShadow: `0 1px 2px rgba(0,0,0,0.07), 
    0 2px 4px rgba(0,0,0,0.07), 
    0 4px 8px rgba(0,0,0,0.07), 
    0 8px 16px rgba(0,0,0,0.07),
    0 16px 32px rgba(0,0,0,0.07), 
    0 32px 64px rgba(0,0,0,0.07)`,
  },
  imageProduct: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  tableCell: {
    fontWeight: 'bold',
    color: '#a8a8a8',
  },
});

export default useStyles;
