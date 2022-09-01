import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Button from '@components/Button';

function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.backgroundContainer}>
            <Image
              style={styles.backgroundImage}
              source={require('@assets/img/mobiles.jpg')}
            />
            <Text style={styles.welcomeMain}>Welcome to The Postal Station & Mobile Page.</Text>
            <Text style={styles.welcomeSecondary}>All Your Cell Phone Needs</Text>
          </View>
          <View style={styles.services}>
            <Text style={styles.ourService}>Our Services</Text>
            <View style={styles.serviceContainer}>
              <View>
                <Image
                  source={require('@assets/img/glass.jpeg')}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceTitle}>
                  Services
                </Text>
                <Text style={styles.serviceDescription}>
                  Tempered Glass Screens, Cell phone cases & Pouches, Bluetooth Headsets & Speakers, Car Chargers, Car Mounts for Cell Phones, Memory Cards, Cell Phone Batteries, All your Cell Phone needs.
                </Text>
              </View>
            </View>
            <View style={styles.serviceContainer}>
              <View>
                <Image
                  source={require('@assets/img/accessories.jpeg')}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceTitle}>
                  Services
                </Text>
                <Text style={styles.serviceDescription}>
                  We offer cellular phone plans, phones, accessories.
                </Text>
              </View>
            </View>
            <View style={styles.serviceContainer}>
              <View>
                <Image
                  source={require('@assets/img/services.png')}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceTitle}>
                  Services
                </Text>
                <Text style={styles.serviceDescription}>
                  Our staff has an acute knowledge of wireless plans and equipment to assist with questions.
                  We offer the areas most affordable solutions.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutTitle}>About Us</Text>
            <Text style={styles.serviceDescription}>Welcome to “The Postal Station & Mobile Page” Serving the Fresno and the surrounding areas since 1994. We offer cellular phone plans, phones, accessories. Our staff has an acute knowledge of wireless plans and equipment to assist with questions. We offer the areas most affordable solutions.</Text>
          </View>
          <View>
            <View style={styles.openingHours}>
              <Image
                style={styles.openingHoursImage}
                source={require('@assets/img/mobile-calendar.jpg')}
              />
              <Text style={styles.hoursTitle}>Business Hours</Text>
              <Text style={styles.hoursText1}>Closed SUNDAYS</Text>
              <Text style={styles.hoursText2}>8:30am – 7:30pm Monday – Friday</Text>
              <Text style={styles.hoursText3}>9:30am – 4:30pm Saturday</Text>
              <Text style={styles.hoursText4}>(559) 277-9400 phone</Text>
              <Text style={styles.hoursText5}>(559) 277-0318 Fax</Text>
            </View>
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

export default Home;

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
    alignItems: 'center'
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 300,
  },

  welcomeMain: {
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    color: '#fff',
    position: 'absolute',
    marginTop: 100,
    paddingRight: 50,
    paddingLeft: 50
  },

  welcomeSecondary: {
    textAlign: 'center',
    fontFamily: 'DMSans-Medium',
    fontSize: 18,
    color: '#fff',
    position: 'absolute',
    marginTop: 165
  },

  serviceContainer: {
    marginBottom: 20
  },

  services: {
    flex: 1,
    marginTop: 40,
    paddingRight: 30,
    paddingLeft: 30
  },

  ourService: {
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    color: '#536942',
    fontSize: 24,
    marginBottom: 40,
  },

  serviceImage: {
    width: '100%',
    height: 200,
    flex: 1
  },

  serviceTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
    color: '#536942',
    marginTop: 10,
    marginBottom: 10
  },

  serviceDescription: {
    fontFamily: 'DMSans-Medium',
    fontSize: 14,
    color: '#536942',
  },

  aboutContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 30
  },

  aboutTitle: {
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    color: '#536942',
    marginBottom: 15
  },

  openingHours: {
    marginTop: 35,
    flex: 1,
    alignItems: 'center'
  },

  openingHoursImage: {
    flex: 1,
    width: '100%',
    height: 280,
  },

  hoursTitle: {
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    color: '#fff',
    position: 'absolute',
    marginTop: 50,
    paddingRight: 50,
    paddingLeft: 50
  },

  hoursText1: {
    textAlign: 'center',
    fontFamily: 'DMSans-Medium',
    fontSize: 18,
    color: '#fff',
    position: 'absolute',
    marginTop: 110
  },

  hoursText2: {
    textAlign: 'center',
    fontFamily: 'DMSans-Medium',
    fontSize: 18,
    color: '#fff',
    position: 'absolute',
    marginTop: 140
  },

  hoursText3: {
    textAlign: 'center',
    fontFamily: 'DMSans-Medium',
    fontSize: 18,
    color: '#fff',
    position: 'absolute',
    marginTop: 170
  },

  hoursText4: {
    textAlign: 'center',
    fontFamily: 'DMSans-Medium',
    fontSize: 18,
    color: '#fff',
    position: 'absolute',
    marginTop: 200
  },

  hoursText5: {
    textAlign: 'center',
    fontFamily: 'DMSans-Medium',
    fontSize: 18,
    color: '#fff',
    position: 'absolute',
    marginTop: 230
  },

  formContainer: {
    marginTop: 50,
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
