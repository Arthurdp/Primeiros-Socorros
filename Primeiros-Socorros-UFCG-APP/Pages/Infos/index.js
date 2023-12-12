import { Text, View, Image, ScrollView, Button, Linking, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import infos from './infos'
import { useRoute } from '@react-navigation/native';

export default function Infos({ }) {

  var atualEmergency = ''
  var atualDicas = ''
  var atualFAQs = ''

  const [showFAQs, setshowFAQs] = useState(false);

  const route = useRoute()

  var title = route.params.title

  infos.forEach(element => {
    if (Object.entries(element)[0][1] == title) {
      atualEmergency = Object.entries(element)
      atualDicas = atualEmergency[2][1]
      atualFAQs = atualEmergency[3][1]
    }
  });

  function changeShowFAQs() {
    console.log(this.showFAQs)
    this.showFAQs = !this.showFAQs
  }

  function phoneCall() {
    Linking.openURL(`tel:${'192'}`)
  }

  return (

    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>{atualEmergency[0][1]}</Text>
      </View>
      <ScrollView>
        {(atualEmergency[1][1] != "") &&
          <Image style={styles.titleImg} source={atualEmergency[1][1]}></Image>
        }
        <View style={styles.view}>
          {
          }
          {atualDicas.map(dica => <View key={dica["title"]}>
            <View style={styles.titleBar}>
              <View style={styles.numberView}><Text style={styles.number}>{dica["id"]}</Text></View>
              <Text style={styles.dicaTitle}>{dica["title"]}</Text></View>
            {(dica["img"] != "") &&
              <Image style={styles.img} source={dica["img"]} />
            }
            {(dica["descricao"] != "") &&
              <Text style={styles.dicaDesc}>{dica["descricao"]}</Text>
            }
          </View>)}
        </View>

        <Text style={styles.faq}>Perguntas e Respostas</Text>

        {showFAQs &&
          <View style={styles.view}>

          {atualFAQs.map(FAQ => <View key={FAQ["title"]}>
            <Text style={styles.FAQTitle}>{FAQ["title"]}</Text>
            {(FAQ["img"] != "") &&
              <Image style={styles.img} source={FAQ["img"]}></Image>
            }
            {(FAQ["descricao"] != "") &&
              <Text style={styles.FAQDesc}>{FAQ["descricao"]}</Text>
            }
          </View>
          )}
        </View>
        }
        <TouchableOpacity style={styles.toutchFAQ} onPress={ ()=> setshowFAQs(!showFAQs)}>
            <Text style={styles.showFAQs}>{showFAQs ? "Esconder FAQs" : "Mostrar FAQs"}</Text>
        </TouchableOpacity>

      </ScrollView>
      <View>
        <Button onPress={phoneCall} style={styles.button} title='Ligue para a emergência!'></Button>
      </View>
    </View>
  );
};
