import { Marquee } from "@animatereactnative/marquee";
import { PlayerControls } from "@/components/PlayerControls";
import { PlayerProgressBar } from "@/components/PlayerProgressbar";
import { PlayerRepeatToggle } from "@/components/PlayerRepeatToggle";
import { PlayerVolumeBar } from "@/components/PlayerVolumeBar";
import { SwipeablePlayerScreen } from "@/components/SwipeablePlayerScreen";
import { unknownTrackImageUri } from "@/constants/images";
import { colors, fontSize, screenPadding } from "@/constants/tokens";
// import { usePlayerBackground } from "@/hooks/usePlayerBackground";
import { defaultStyles, utilsStyles } from "@/styles";
import {
    FontAwesome,
    AntDesign,
    MaterialCommunityIcons,
    Feather,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
    ActivityIndicator,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSoundStore } from "@/hooks/useSoundStore";
import { router } from "expo-router";

const PlayerScreen = () => {
    const { activeTrack } = useSoundStore();
    // const { imageColors } = usePlayerBackground(
    //     activeTrack?.artwork ?? unknownTrackImageUri
    // );
    const { top, bottom } = useSafeAreaInsets();
    const isFavorite = false;
    const toggleFavorite = () => {};
    if (!activeTrack) {
        return (
            <View
                style={[defaultStyles.container, { justifyContent: "center" }]}
            >
                <ActivityIndicator color={colors.icon} />
            </View>
        );
    }
    return (
        <SwipeablePlayerScreen>
            <LinearGradient
                style={{ flex: 1 }}
                colors={
                    // imageColors
                    //     ? [imageColors.palette, imageColors.average]
                    //     : [colors.background, colors.primary]
                    [colors.background, colors.text]
                }
            >
                <View style={styles.overlayContainer}>
                    <DismissPlayerSymbol />
                    <View
                        style={{
                            flex: 1,
                            marginTop: top + 30,
                            marginBottom: bottom,
                        }}
                    >
                        <View style={styles.artworkImageContainer}>
                            <Image
                                source={{
                                    uri:
                                        activeTrack.artwork ??
                                        unknownTrackImageUri,
                                }}
                                resizeMode="cover"
                                style={styles.artworkImage}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ marginTop: "auto" }}>
                                <View style={{ height: 60 }}>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        {/* Track title */}
                                        <View
                                            style={styles.trackTitleContainer}
                                        >
                                            {activeTrack.title?.length &&
                                            activeTrack.title?.length > 25 ? (
                                                <Marquee
                                                    spacing={150}
                                                    speed={1}
                                                >
                                                    <Text
                                                        style={
                                                            styles.trackTitleText
                                                        }
                                                    >
                                                        {activeTrack.title}
                                                    </Text>
                                                </Marquee>
                                            ) : (
                                                <Text
                                                    style={
                                                        styles.trackTitleText
                                                    }
                                                >
                                                    {activeTrack.title}
                                                </Text>
                                            )}
                                        </View>
                                        {/* Favorite and repeat button icon */}
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <View
                                                style={utilsStyles.centeredRow}
                                            >
                                                <PlayerRepeatToggle size={30} />
                                            </View>
                                        </View>
                                    </View>
                                    {/* Track artist */}
                                    {activeTrack.artist?.length &&
                                    activeTrack.artist?.length > 30 ? (
                                        <Marquee spacing={150} speed={1}>
                                            <Text
                                                style={styles.trackArtistText}
                                            >
                                                {activeTrack.artist}
                                            </Text>
                                        </Marquee>
                                    ) : (
                                        <Text style={styles.trackArtistText}>
                                            {activeTrack.artist ||
                                                "Unknown Artist"}
                                        </Text>
                                    )}
                                </View>
                                <PlayerProgressBar style={{ marginTop: 32 }} />
                                <PlayerControls style={{ marginTop: 40 }} />
                            </View>
                            <PlayerVolumeBar
                                style={{ marginTop: "auto", marginBottom: 80 }}
                            />
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <FontAwesome
                                        name={isFavorite ? "heart" : "heart-o"}
                                        size={25}
                                        color={
                                            isFavorite
                                                ? colors.primary
                                                : colors.background
                                        }
                                        style={{ marginHorizontal: 14 }}
                                        onPress={toggleFavorite}
                                    />
                                    <Text
                                        style={{
                                            color: colors.background,
                                            marginRight: 20,
                                            fontSize: 15,
                                        }}
                                    >
                                        12K
                                    </Text>
                                    <MaterialCommunityIcons
                                        name="comment-text-outline"
                                        size={25}
                                        color={colors.background}
                                        style={{ marginHorizontal: 14 }}
                                    />
                                    <Text
                                        style={{
                                            color: colors.background,
                                            fontSize: 15,
                                        }}
                                    >
                                        450
                                    </Text>
                                </View>
                                <Feather
                                    name="upload"
                                    size={30}
                                    color={colors.background}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </SwipeablePlayerScreen>
    );
};
const DismissPlayerSymbol = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View
            style={{
                position: "absolute",
                top: top - 20,
                left: 0,
                right: 0,
                flexDirection: "row",
                justifyContent: "center",
            }}
        >
            <TouchableOpacity onPress={() => router.back()}>
                {/* <View
                    style={{
                        width: 25,
                        height: 25,
                        borderLeftWidth: 8,
                        borderBottomWidth: 8,
                        borderColor: "#aaa",
                        opacity: 0.7,
                        transform: [{ rotate: "-45deg" }],
                    }}
                /> */}
                <AntDesign
                    name="down"
                    size={50}
                    color="#aaa"
                    style={{ opacity: 0.7 }}
                />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    overlayContainer: {
        ...defaultStyles.container,
        paddingHorizontal: screenPadding.horizontal,
        backgroundColor: "transparent",
    },
    artworkImageContainer: {
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 11.0,
        flexDirection: "row",
        justifyContent: "center",
        height: "45%",
    },
    artworkImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 12,
    },
    trackTitleContainer: {
        flex: 1,
        overflow: "hidden",
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: 22,
        fontWeight: "700",
    },
    trackArtistText: {
        ...defaultStyles.text,
        fontSize: fontSize.base,
        opacity: 0.8,
        maxWidth: "90%",
    },
});
export default PlayerScreen;
