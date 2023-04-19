import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    padding: 15,
    justifyContent: 'space-between',
  },
  headerStyle: {
    marginBottom: 15,
  },
  mainTitle: {
    fontSize: 31,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  helperText: {
    color: 'gray',
    fontWeight: '800',
  },
  imageTapContainer: {
    width: '100%',
    alignItems: 'center',
  },
  imageStyle: {
    width: 150,
    height: 200,
  },
  touchableTextContainer: {
    backgroundColor: 'lightgray',
    width: 150,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 20,
  },
  tapToUploadTextStyle: {
    color: 'gray',
    fontWeight: '800',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  errorStyle: {
    fontSize: 11,
    color: 'red',
    fontWeight: '800',
  },
  submitButtonLinearGradinet: {
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
