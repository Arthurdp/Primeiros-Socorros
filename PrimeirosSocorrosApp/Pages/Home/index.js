import { Button, Text, View } from 'react-native';
import styles from "./style"

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.midView}>
        <Text style={styles.midText}>Você sabe qual o problema da vítima?</Text>
      </View>
      <View style={styles.endView}>
        <Button onPress={()=> navigation.navigate("FirstAid")} title='Sim'></Button>
        <Button onPress={()=> navigation.navigate("GeneralHelp")} title='Não'></Button>
        <Button onPress={()=> navigation.navigate("FirstAid")} title='Não estou em uma emergência'></Button>
      </View>
    </View>
  );
}