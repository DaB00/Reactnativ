import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    TouchableBoxHistory: {
      width: '100%',
      height: 40,
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5',
    },
    textHistory: {
      paddingLeft: 15,
      fontSize: 20,
    },
    textinput: {
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      margin: '2%',
      fontSize: 20,
      flex: 8,
      borderRadius: 15,
      paddingLeft: 15,
      backgroundColor: 'white',
    },
    TouchableBoxSerch:{
      flex: 2, 
      alignItems: 'center',
       justifyContent: 'center'
    },
    textSerch:{
      fontSize: 18, 
      color: '#71b5f9',
       paddingRight: '2%'
    },
    container:{flex: 1, flexDirection: 'column'},
    boxSerch:{flexDirection: 'row', backgroundColor: '#dbd9d9'}
    
  });
  export default styles