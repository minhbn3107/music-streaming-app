import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { anh1Uri } from "@/constants/images";
import { defaultStyles, utilsStyles } from "@/styles";
import { router } from "expo-router";

const LaunchScreen = () => {
    return (
        <SafeAreaView style={[defaultStyles.container]}>
            <Image source={{ uri: anh1Uri }} style={utilsStyles.img} />
            <View style={styles.boxContainer}>
                <View>
                    <Text style={styles.colorText}>YOUR MUSIC</Text>
                    <Text style={[styles.colorText, { marginBottom: 70 }]}>
                        YOU ARTISTS
                    </Text>
                    <TouchableOpacity
                        onPress={() => router.navigate("/(tabs)/home")}
                    >
                        <Text style={[styles.textBtn, styles.bgrCr]}>
                            Create an account
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.navigate("/(tabs)/home")}
                    >
                        <Text style={[styles.textBtn, styles.bgrRg]}>
                            I already have an account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    boxContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },

    colorText: {
        fontSize: 40,
        color: "#fff",
        textAlign: "center",
    },
    textBtn: {
        padding: 15,
        borderRadius: 30,
        backgroundColor: "#171A1F",
        margin: 15,
        marginBottom: 20,
        fontSize: 15,
        textAlign: "center",
        fontWeight: "500",
    },
    bgrCr: {
        backgroundColor: "#EBFDFF",
        color: "blue",
    },
    bgrRg: {
        color: "#fff",
    },
});

export default LaunchScreen;
