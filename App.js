import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const Profile = () => {
  return (
    <View>
      <Image source={require('./assets/profilepic.jpg')} style= {styles.profile}/>     
    </View>
  )
};

export default function App() {
  return (
    <View style={styles.container}>
      <Profile/>
        <Image source={require('./assets/google.png')} style= {styles.googleicon}/>
        
      <View style={styles.head}>
        <Text style={{fontFamily: 'Arial', color: 'gray'}}>Search...</Text>
        <Image source={require('./assets/search.png')} style= {styles.searchicon}/>
        <Image source={require('./assets/mic.png')} style= {styles.micicon}/>
        <Image source={require('./assets/lens.png')} style= {styles.lensicon}/>
      </View>

      <View style={styles.head1}>
        <Text style={{fontFamily: 'Arial', fontSize: '14px', fontWeight: 'bold'}}>Trinidad</Text>
        <Text style={{fontFamily: 'Arial', fontSize: '10px', color: 'gray'}}>Mostly cloudy · 40%</Text>
        <View style={styles.head2}>
          <Text style={{fontFamily: 'Arial', fontSize: '25px'}}>80°F</Text>
          <Image source={require('./assets/weather.jpg')} style= {styles.weathericon}/>
        </View>
        <View>
          <Image source={require('./assets/previous.jpg')} style= {styles.previousicon}/>
        </View>
        <View>
          <Image source={require('./assets/navbar.jpg')} style= {styles.navigation}/>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  profile: {
    width: 43,
    height: 43,
    borderRadius: 100 / 2,
    margin: '30px',
    marginLeft: '310px',
  },

  googleicon: {  
    top: 1,  
    width: 140,
    height: 50,
  },

  head: {
    top: 30,
    padding: '15px',
    paddingLeft: '45px',
    borderColor: '#808080',
    borderWidth: 1,
    height: 50,
    width: 320,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },

  searchicon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 12,
    left: 13,
  },

  micicon: {
    width: 23,
    height: 20,
    position: 'absolute',
    top: 12,
    right: 50,
  },

  lensicon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 12,
    right: 15,
  },

  head1: {
    marginTop: '45px',
    padding: '14px',
    paddingLeft: '12px',
    borderColor: '#808080',
    borderWidth: 1,
    height: 60,
    width: 320,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  head2: {
    padding: '3px',
    flexDirection: 'row',
    position: 'absolute',
    right: 49,
  },

  weathericon: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 0,
    left: 55,
  },

  previousicon: {
    right: 16,
    top: 30,
    width: 320,
    height: 340,
  },

  navigation: {
    top: 52,
    right: 55,
    width: 400,
    height: 45,
  },

});
