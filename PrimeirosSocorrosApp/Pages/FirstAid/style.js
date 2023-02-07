import { StyleSheet } from "react-native";
import { block } from "react-native-reanimated";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
    touch:{
      height:60,
      borderWidth:1,
      borderRightWidth:0,
      borderLeftWidth:0,
      borderTopWidth:1,
      borderBottomColor:"#888888",
      borderTopColor:"#888888",
      justifyContent:"center",
    },
    touchText:{
      fontSize:17,
      marginLeft:10,
    },
    img:{
      height:20,
      width: 20
    }
  });

export default styles;