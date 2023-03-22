import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title:{
      fontSize:20,
    },
    text:{
      marginLeft:15,
      marginRight:15,
      color:"#444",
      fontSize:17,
    },
    number:{
      color:"#fff",
      fontSize:15,
    },
    numberView:{
      backgroundColor: "#ee0040",
      borderRadius:50,
      marginRight:15,
      height:30,
      width:30,
      alignItems:"center",
      justifyContent:"center",
    },
    titleBar:{
      flexDirection:"row",
      padding:15
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