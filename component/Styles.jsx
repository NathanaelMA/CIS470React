import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightblue',
    flexGrow: 1,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerText: {
    backgroundColor: 'gray',
    padding: 10,
  },
});

export {styles};
