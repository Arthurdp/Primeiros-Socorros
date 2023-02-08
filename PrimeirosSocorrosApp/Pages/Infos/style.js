import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    dicaTitle:{
      fontSize:17,
    },
    dicaDesc:{
      fontSize:15,
      padding:15,
      color:"#444",
    },
    toutchFAQ:{
      height: 30
    },
    FAQTitle:{
      fontSize:16,
    },
    FAQDesc:{
      fontSize:14,
      padding:15,
      color:"#444",
    },
    view:{
      padding:20
    },
    faq:{
      justifyContent:"center",
      fontSize:18,
      marginLeft:20
    },
    topBar:{
      backgroundColor:"#ee0040",
      height:50,
      alignContent:"center",
      alignItems:"center",
      justifyContent:"center",
    },
    topBarText:{
      color:"#fff",
      fontSize:20,
    },
    img:{
      display:"flex",
      height:100,
      width:"100%"
    },
    titleImg:{
      display:"flex",
      height:200,
      width:"100%"
    },
    arrow:{
      height:10,
      width:10
    }
  });

export default styles;