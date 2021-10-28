import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  heading: {
    color: '#b61616',
    fontFamily: '"Helvetica Neue"',
    fontWeight: 600,
  },
  image: {
    marginLeft: '15px',
  },
}));
