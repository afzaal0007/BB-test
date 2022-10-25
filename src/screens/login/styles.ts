import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: '2rem',
    height: '2.5rem',
    width: '10rem',
    borderRadius: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButton: {
    backgroundColor: 'darkgreen',
  },
  signInButton: {
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: '0.9rem',
    color: 'white',
  },
});

export default styles;
