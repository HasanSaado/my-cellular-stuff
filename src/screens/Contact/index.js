import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  Linking,
  TouchableOpacity
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Button from '@components/Button';

function Contact() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.backgroundContainer}>
            <Image
              style={styles.backgroundImage}
              source={require('@assets/img/contact-us.jpeg')}
            />
            <View style={styles.overlay} />
            <Text style={styles.welcomeMain}>Contact Us</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Address</Text>
            <TouchableOpacity onPress={() => { Linking.openURL('https://www.google.com/maps/place/4460+W+Shaw+Ave,+Fresno,+CA+93722/@36.8096411,-119.8739234,17z/data=!3m1!4b1!4m5!3m4!1s0x80946602e6ad9ed5:0xa53dca527ad358dd!8m2!3d36.8096368!4d-119.8717347?hl=en-GB'); }}>
              <Text style={styles.infoText}>4460 W. Shaw Ave. Fresno, CA 93722</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Email Us</Text>
            <TouchableOpacity onPress={() => { Linking.openURL('mailto:shantbedoyan@gmail.com'); }}>
              <Text style={styles.infoText}>shantbedoyan@gmail.com</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Telephone</Text>
            <TouchableOpacity onPress={() => { Linking.openURL('tel:+15592779400'); }}>
              <Text style={styles.infoText}>+1 559-277-9400</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.aboutTitle}>Let's Get In Touch</Text>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.formInput}
                underlineColorAndroid="transparent"
                placeholder="Your Name"
                placeholderTextColor="#536942"
                multiline={true}
              />
            </View>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.formInput}
                underlineColorAndroid="transparent"
                placeholder="Your Email"
                placeholderTextColor="#536942"
                multiline={true}
              />
            </View>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type Message"
                placeholderTextColor="#536942"
                numberOfLines={10}
                multiline={true}
              />
            </View>
            <Button />
          </View>
          <View style={styles.social}>
            <Text style={styles.aboutTitle}>Follow Us At</Text>
            <View style={styles.iconContainer}>
              <FontAwesome name="facebook-official" color="#1877f2" size={40} />
              <FontAwesome name="twitter" color="#1d9bf0" size={40} />
              <FontAwesome name="youtube-play" color="#f00" size={40} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  main: {
    flex: 1
  },

  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 30
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 300,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },

  welcomeMain: {
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 32,
    color: '#fff',
    position: 'absolute',
    marginTop: 130,
    paddingRight: 50,
    paddingLeft: 50
  },

  aboutTitle: {
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    color: '#536942',
    marginBottom: 15
  },

  infoContainer: {
    marginHorizontal: 30,
    marginBottom: 20
  },

  infoTitle: {
    fontSize: 24,
    fontFamily: 'DMSans-Bold',
    color: '#536942'
  },

  infoText: {
    fontSize: 16,
    fontFamily: 'DMSans-Medium',
    color: '#4d4d4d'
  },

  formContainer: {
    marginTop: 30,
    marginBottom: 30,
    marginRight: 30,
    marginLeft: 30,
  },

  textAreaContainer: {
    borderColor: '#4d4d4d',
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
    borderRadius: 30
  },

  textArea: {
    height: 150,
    justifyContent: "flex-start",
    textAlignVertical: 'top'
  },

  formInput: {
    height: 35,
    justifyContent: "flex-start",
    textAlignVertical: 'top'
  },

  social: {
    marginHorizontal: 80,
    marginBottom: 30
  },

  iconContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
