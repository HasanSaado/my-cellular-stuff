import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";

function Services() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.services}>
            <Text style={styles.ourService}>Services</Text>
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
            <View style={styles.serviceContainer}>
              <View>
                <Image
                  source={require('@assets/img/fingerprinting.jpg')}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceTitle}>
                  Services
                </Text>
                <Text style={styles.serviceDescription}>
                  Our staff has an acute knowledge of wireless plans and equipment to assist with questions.
                </Text>
              </View>
            </View>
            <View style={styles.serviceContainer}>
              <View>
                <Image
                  source={require('@assets/img/mobiles.jpg')}
                  style={styles.serviceImage}
                />
                <Text style={styles.serviceTitle}>
                  Services
                </Text>
                <Text style={styles.serviceDescription}>
                  We offer the areas most affordable solutions.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  main: {
    flex: 1
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
    fontSize: 30,
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
