import { Button, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import styles from "./style"

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.midView}>
        <ImageBackground style={styles.img} source={require('../../assets/cruz.png')}>
          <Text style={styles.midText}>Você sabe qual o problema da vítima?</Text></ImageBackground>
      

      
    </View><View style={styles.endView}>
        <Button onPress={() => navigation.navigate("FirstAid")} title='Sim'></Button>
        <Button onPress={() => navigation.navigate("GeneralHelp")} title='Não'></Button>
        <Button style={styles.buttom} onPress={() => navigation.navigate("FirstAid")} title='Não estou em uma emergência'></Button>
      </View>
    </View>
  );
}