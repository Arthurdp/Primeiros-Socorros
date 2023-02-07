import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title:{
      fontSize:20,
      padding:15,
    },
    text:{
      marginLeft:15,
      marginRight:15,
      color:"#444",
    },
    topBar:{
      backgroundColor:"#ee0040",
      height:50,
      alignContent:"center",
      alignItems:"center",
      justifyContent:"center"
    },
    topBarText:{
      color:"#fff",
      fontSize:20,
    },
    button:{
      padding:10
    }
  });

export default styles;