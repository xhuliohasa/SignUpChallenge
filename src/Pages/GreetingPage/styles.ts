import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 10,
  },
  mainTitle: {
    fontSize: 31,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  subtitle: {
    color: 'gray',
    fontWeight: '800',
  },
  headerContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 150,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  detailsContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  linkStyle: {
    textDecorationLine: 'underline',
    color: '#04c3d1',
    fontWeight: '700',
    marginBottom: 10,
  },
  nameEmailStyle: {
    marginBottom: 10,
    fontWeight: '800',
    color: 'gray',
  },
  singInLinearGradient: {
    height: 50,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
