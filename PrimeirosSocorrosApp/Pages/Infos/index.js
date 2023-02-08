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

  Object.entries(infos).forEach(element => {
    if (element[0] == title) {
      atualEmergency = element
      atualDicas = Object.entries(atualEmergency[1])[1][1]
      atualFAQs = Object.entries(atualEmergency[1])[2][1]
    }
    console.log(element[0])
  });


  function phoneCall() {
    Linking.openURL(`tel:${'192'}`)
  }

    return (

      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>{atualEmergency[0]}</Text>
        </View>
        <ScrollView>
          {/* <Image source={}></Image> */}
          <View style={styles.view}>
            {
              // atualDicas.map(dica => <Image source={image} />)
            }
            {atualDicas.map(dica => <View key={dica["title"]}>
              <Text style={styles.dicaTitle}>{dica["title"]}</Text>
              <Text style={styles.dicaDesc}>{dica["descricao"]}</Text>
            </View>)}
          </View>

          {/* <Panel title="Perguntas e Respostas" desc={}></Panel> */}

          <TouchableOpacity style={styles.toutchFAQ} >
            <Text style={styles.faq}>Perguntas e Respostas</Text>
            <Image source={require('../../assets/arrow up.png')}></Image>
          </TouchableOpacity >
          {/* <Collapsible collapsed={collapse} duration={300} > */}
            <View style={styles.view}>
              {
                // atualFAQs.map(FAQ => <Image source={FAQ[require(FAQ["img"])]}></Image>)
              }
              {atualFAQs.map(FAQ => <View key={FAQ["title"]}>
                <Text style={styles.FAQTitle}>{FAQ["title"]}</Text>
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
