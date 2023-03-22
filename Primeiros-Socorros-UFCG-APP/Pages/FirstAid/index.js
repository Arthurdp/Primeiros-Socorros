import { Button, FlatList, Linking, Text, Image, TouchableOpacity, View } from 'react-native';
import styles from './style';
import jsonEmergencyList from "./emergencyList"

export default function FirstAid({navigation}) {

  return (
    <View style={styles.container}>
      <FlatList
        data={jsonEmergencyList}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity 
              onPress={()=> navigation.navigate("Infos" , {
                title:item.title
                })
              }
              style={styles.touch}>
                <Image style={styles.img} source={ item.img } alt=""></Image>
                <Text style={styles.touchText}>{ item.title }</Text>
              </TouchableOpacity>
            </View>
          )
        }
        }
      />
      <View>
        <Button onPress={()=> navigation.navigate("GeneralHelp")} style={styles.button} title='Não Sei o que pode ser!'></Button>
        <Button onPress={phoneCall} style={styles.button} title='Ligue para a emergência!'></Button>
      </View>
    </View>
  );
  
  function phoneCall() {
    Linking.openURL(`tel:${'192'}`)
  }
}