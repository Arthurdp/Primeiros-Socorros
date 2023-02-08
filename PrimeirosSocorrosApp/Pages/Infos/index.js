import { Text, View, Image, ScrollView, Button, Linking, TouchableOpacity } from 'react-native';
import styles from './style';
import infos from './infos'
import { useRoute } from '@react-navigation/native';

export default function Infos({ navigation }) {

  var atualEmergency = ''
  var atualDicas = ''
  var atualFAQs = ''

  const route = useRoute()

  var title = route.params.title

  infos.forEach(element => {
    if (Object.entries(element)[0][1] == title) {
      atualEmergency = Object.entries(element)
      atualDicas = atualEmergency[2][1]
      atualFAQs = atualEmergency[3][1]
    }
    // console.log(atualEmergency[0][1])
  });


  function phoneCall() {
    Linking.openURL(`tel:${'192'}`)
  }

  return (

    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>{atualEmergency[0][1]}</Text>
      </View>
      <ScrollView>
        <Image style={styles.titleImg} source={atualEmergency[1][1]}></Image>
        <View style={styles.view}>
          {
          }
          {atualDicas.map(dica => <View key={dica["title"]}>
            <Text style={styles.dicaTitle}>{dica["title"]}</Text>
            {(dica["img"] != "") &&
              <Image style={styles.img} source={dica["img"]} />
            }
            <Text style={styles.dicaDesc}>{dica["descricao"]}</Text>
          </View>)}
        </View>

        {/* <Panel title="Perguntas e Respostas" desc={}></Panel> */}

        <TouchableOpacity style={styles.toutchFAQ} >
          <Text style={styles.faq}>Perguntas e Respostas</Text>
          <Image style={styles.arrow} source={require('../../assets/arrow-down.png')}></Image>
        </TouchableOpacity >
        {/* <Collapsible collapsed={collapse} duration={300} > */}
        <View style={styles.view}>
          {
          }
          {atualFAQs.map(FAQ => <View key={FAQ["title"]}>
            <Text style={styles.FAQTitle}>{FAQ["title"]}</Text>
            {(FAQ["img"] != "") &&
              <Image style={styles.img} source={FAQ["img"]}></Image>
            }
            <Text style={styles.FAQDesc}>{FAQ["descricao"]}</Text>
          </View>)}
        </View>
        {/* </Collapsible> */}

      </ScrollView>
      <View>
        <Button onPress={phoneCall} style={styles.button} title='Ligue para a emergência!'></Button>
      </View>
    </View>
  );
};
