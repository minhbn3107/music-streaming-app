import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { avatarIconUri, logoUri } from "@/constants/images";
import { colors } from "@/constants/tokens";

const Header = () => {
    return (
        <View style={styles.containerheader}>
            <Image source={{ uri: logoUri }} style={styles.img_logo} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome name="bell" size={28} />
                <Image
                    source={{ uri: avatarIconUri }}
                    style={styles.avatar_img}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerheader: {
        width: "100%",
        backgroundColor: "#f2f2f2",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: colors.textMuted,
        borderWidth: StyleSheet.hairlineWidth,
    },
    img_logo: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    avatar_img: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
});

export default Header;
