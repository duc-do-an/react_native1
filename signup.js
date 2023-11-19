import React from "react";
import { View, Text, Button, StyleSheet, Image, TextInput, ImageBackground } from "react-native";

const Signup = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'white', paddingLeft: 500 }}>


    <Image source={require("./assets/hospital.png")} style={styles.img} />
    <Text style={styles.logtxt}>Đăng Ký</Text>
    <Text style={styles.label}>Name</Text>
    <View style={styles.inputContainer}>
      <TextInput placeholder="Name" style={styles.input} />
    </View>
    <Text style={styles.label}>Email</Text>
    <View style={styles.inputContainer}>
      <TextInput placeholder="Email" style={styles.input} />
    </View>
    <Text style={styles.label}>Password</Text>
    <View style={styles.inputContainer}>
      <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
    </View>
    <Text style={styles.label}>Confirm Password</Text>
    <View style={styles.inputContainer}>
      <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry={true} />
    </View>
    <Button
      onPress={() => navigation.navigate('Login')}
      title="Đăng ký"
      color="black"></Button>

  </View>
);
const styles = StyleSheet.create({
  img: {
    width: 220,
    height: 150
  },
  logtxt: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20
  },
  label: {
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 15,
    paddingBottom: 5,
    fontWeight: 'bold'
  },
  inputContainer: {
    height: 40,
    width: 300,
    margin: 5,
    fontSize: 18,
    textAlign: 'left',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#F3FDE8'
  },
  input: {
    height: 30,
    fontSize: 18,
    width: 300},
  backimg: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Signup;