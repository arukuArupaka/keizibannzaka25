import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LockScreen = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      {/* <Image source={require('./assets/lock.png')} style={styles.lockIcon} /> */}

      <View style={styles.rankBox}>
        <Text style={styles.rankText}>次のランクまで{'\n'}あと１０</Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.text}>ランクを上げて、知の冒険へ！{'\n'}次のランクに到達すると、</Text>
        <Text style={styles.text}>
          あの
          <Text style={styles.highlight}>教授の本当の姿</Text>
          を{'\n'}世に伝えられる――。
        </Text>
    <Text style={styles.text}>履修登録は、{'\n'}もはや一人じゃない。{'\n'}自分だけの{'\n'}「最強の時間割」を作ろう！</Text>
      </View>

      <TouchableOpacity onPress={() => router.push("/")} style={styles.backButton}>

        <Text style={styles.backButtonText}>戻る</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LockScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  rankBox: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    marginBottom:40,
    marginTop: 200,
  },
  rankText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: "DotGothic16_400Regular",
  },
  description: {
    marginBottom: 30,
  },
  text: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    lineHeight: 40,
    fontFamily: "DotGothic16_400Regular",
    padding: 10,
  },
  highlight: {
    color: 'red',
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 50,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: "DotGothic16_400Regular",
  },
});
