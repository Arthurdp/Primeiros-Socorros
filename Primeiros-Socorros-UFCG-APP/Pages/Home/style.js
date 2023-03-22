import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignContent:"center"
    },
    midView:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    },
    midText:{
      fontSize:20,
      color:"#fff"
    },
    endView:{
      flexDirection:"column",
      justifyContent:"space-between",
    },
    buttom:{
      backgroundColor:"#444",
      borderRadius:50
    },
    img:{
      // flexDirection:"column",
      height:"100%",
      width:800,
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center"
    }
  });

export default styles;