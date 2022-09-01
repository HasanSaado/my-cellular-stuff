import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";

function Button() {

  return (
    <TouchableOpacity style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Send Message</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#ffd936',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 12
  },

  appButtonText: {
    fontSize: 18,
    color: '#536942',
    fontFamily: 'DMSans-Bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  }
});
