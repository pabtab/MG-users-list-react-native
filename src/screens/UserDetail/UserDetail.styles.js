import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  profileContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  addIconPic: {
    marginTop: -25,
    marginLeft: 80,
    fontSize: 30,
    zIndex: 10,
    color: 'blue',
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  value: {
    flex: 1,
    textAlign: 'right',
  }
})

export default Styles;