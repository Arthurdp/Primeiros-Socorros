import { StyleSheet } from "react-native";
import { block } from "react-native-reanimated";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display:"flex",
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
      justifyContent:"flex-start",
      flexDirection: "row",
      alignItems:"center"
    },
    touchText:{
      fontSize:16,
      marginLeft:10,
    },
    img:{
      marginLeft:15,
      height:30,
      width:30,
    }
  });

export default styles;