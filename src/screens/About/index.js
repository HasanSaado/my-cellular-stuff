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

function About() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.backgroundContainer}>
            <Image
              style={styles.backgroundImage}
              source={require('@assets/img/about.jpg')}
            />
            <View style={styles.overlay} />
            <Text style={styles.welcomeMain}>About Modern Business</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>Welcome to "The Postal Station & Mobile Page" Serving the Fresno and the surrounding areas since 1994. We offer cellular phone plans, phones, accessories. Our staff has an acute knowledge of wireless plans and equipment to assist with questions. We offer the areas most affordable solutions.</Text>
          </View>
          <View style={styles.services}>
            <Text style={styles.ourService}>What Makes Us Different</Text>
            <View style={styles.serviceContainer}>
              <View>
                <Image
                  source={require('@assets/img/mission.jpg')}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceTitle}>
                  Our Mission
                </Text>
                <Text style={styles.serviceDescription}>Text</Text>
              </View>
            </View>
            <View style={styles.serviceContainer}>
              <View>
                <Image
                  source={require('@assets/img/values.jpg')}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceTitle}>
                  Our Values
                </Text>
                <Text style={styles.serviceDescription}>Text</Text>
              </View>
            </View>
            <View style={styles.serviceContainer}>
              <View>
                <Image
                  source={require('@assets/img/quality.jpg')}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceTitle}>
                  Product Quality
                </Text>
                <Text style={styles.serviceDescription}>Text</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default About;

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
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 300
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },

  description: {
    marginVertical: 50,
    paddingHorizontal: 30
  },

  descriptionText: {
    fontFamily: 'DMSans-Regular',
    fontSize: 18,
    color: '#536942'
  },

  welcomeMain: {
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 32,
    color: '#fff',
    position: 'absolute',
    marginTop: 120,
    paddingRight: 50,
    paddingLeft: 50
  },

  serviceContainer: {
    marginBottom: 20
  },

  services: {
    flex: 1,
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
  }
});
