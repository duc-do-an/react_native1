import React from "react";
import { View, Text, Button, StyleSheet, Image, TextInput } from "react-native";

const Login = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", backgroundColor: "white" , paddingLeft: 500  }}>
        <Image source={require("./assets/hospital.png")} style={styles.img} />
        <Text style={styles.logtxt}>Đăng Nhập</Text>
        <Text style={styles.email}>Email</Text>
        <View style={styles.placelist}>
            <TextInput placeholder="Email" style={styles.holderemail} />
        </View>
        <Text style={styles.email}>Password</Text>
        <View style={styles.placelist}>
            <TextInput placeholder="Password" style={styles.holderemail} />
            <Text style={styles.forgotPassword}>Quên Mật khẩu</Text>
        </View>
        <Button onPress={() => navigation.navigate("Home")} title="Đăng nhập"  color="green" style={styles.btn}/>
        <Button title='Đăng ký' onPress={()=>navigation.navigate('Signup')} color="#841584"/>
        
        <Text style={styles.signupText}>
            Don't have an account?{" "}
            <Text style={styles.signupLink} onPress={() => navigation.navigate("Signup")}>
                Click here
            </Text>
        </Text>
    </View>
);

const styles = StyleSheet.create({

     
    logtxt: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",

        margin:"center",
        paddingBottom: 30,
        paddingTop: 10,
    },
    email: {
        fontSize: 20,
        textAlign: "auto",
        fontWeight: "bold",
        margin:"center",
    },
    img: {
        width: 220,
        height: 130,
    },
    holderemail: {
        height: 40,
        width: 300,
        margin: 5,
        fontSize: 18,
        textAlign: "left",
        borderRadius: 50,
        padding: 10,
        backgroundColor: "#F3FDE8",
    },
    placelist: {
        marginBottom: 20,
    },
    forgotPassword: {
        fontSize: 14,
        textAlign: "right",
        color: "red",
        marginTop: 5,
    },
    signupText: {
        marginTop: 10,
        fontSize: 14,
        borderRadius: 30,
    },
    signupLink: {
        fontWeight: "bold",
        color: "blue",
    },
    btn: {
        marginTop: 20
    },
});

export default Login;
