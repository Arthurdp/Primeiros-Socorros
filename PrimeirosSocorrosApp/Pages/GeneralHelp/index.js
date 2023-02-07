import { Button, Linking, ScrollView, Text, View } from 'react-native';
import styles from './style';

export default function GeneralHelp({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView >
        <Text style={styles.title}>1: Cheque o ambiente</Text>
        <Text style={styles.text}>É de extrema importância que você avalie o ambiente antes de prestar o socorro. Existe fogo? Fios elétricos soltos? A vítima está em um rio de correnteza forte? Fumaça tóxica? Gases inflamatórios? Em qualquer ambiente em que você precise se pôr em risco para prestar o socorro, não é aconselhável fazê-lo. De nada adianta tentar ajudar a vítima se você vai acabar se tornando uma. Em casos assim, não perca tempo tentando vencer as barreiras, chame imediatamente pelo serviço de emergência.</Text>
        <Text style={styles.title}>2: Chame ajuda</Text>
        <Text style={styles.text}>Grite por alguém, ligue para os serviços oficiais de emergência e resgate, mas garanta que a ajuda esteja vindo o quanto antes.</Text>
        <Text style={styles.title}>3: Cuide da vítima</Text>
        <Text style={styles.text}>Este cuidado não é apenas físico, mas também emocional. Manter a vítima calma e focada é de extrema importância. Por isso, se perceber que a pessoa está consciente e acordada, converse com ela, faça com que ela perceba que você está ali por ela e que a ajuda está a caminho. Por isso, é muito importante que você também mantenha a calma. Não grite, permita espaço para circulação do ar e fique de olho nos sinais vitais da vítima.</Text>
      </ScrollView>

      <View>
        <Button onPress={()=> navigation.navigate("FirstAid")} style={styles.button} title='Veja os possíveis primeiros socorros'></Button>
        <Button onPress={phoneCall} style={styles.button} title='Ligue para a emergência!'></Button>
      </View>
    </View>
  );
  
  function phoneCall() {
    Linking.openURL(`tel:${'192'}`)
  }
}