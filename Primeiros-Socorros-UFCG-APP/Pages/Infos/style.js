import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    dicaTitle:{
      fontSize:17,
      marginRight:30
    },
    dicaDesc:{
      fontSize:15,
      padding:15,
      color:"#444",
    },
    toutchFAQ:{
      padding:10
    },
    FAQTitle:{
      fontSize:16,
      padding:15
    },
    FAQDesc:{
      fontSize:14,
      padding:15,
      marginLeft:10,
      color:"#444",
    },
    view:{
      justifyContent:"center",
      alignContent:"center"
    },
    showFAQs:{
      fontSize:12,
      marginLeft:20,
      color:"#777"
    },
    faq:{
      justifyContent:"center",
      fontSize:18,
      marginLeft:20,
      marginTop:20,
      marginBottom:20
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
    }
  });

export default styles;