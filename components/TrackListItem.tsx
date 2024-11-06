import { unknownTrackImageUri } from "@/constants/images";
import { colors, fontSize } from "@/constants/tokens";
import { defaultStyles } from "@/styles";
import { StyleSheet, Text, Pressable, View, Platform } from "react-native";
import FastImage from "react-native-fast-image";
import { Track, useActiveTrack, useIsPlaying } from "react-native-track-player";
import { Entypo, Ionicons } from "@expo/vector-icons";
import LoaderKit from "react-native-loader-kit";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export type TrackListItemProps = {
    track: Track;
    onTrackSelect: (track: Track) => void;
};

export const TrackListItem = ({
    track,
    onTrackSelect: handleTrackSelect,
}: TrackListItemProps) => {
    const { playing } = useIsPlaying();
    const isActiveTrack = useActiveTrack()?.url === track.url;
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: opacity.value,
    }));

    const handlePressIn = () => {
        scale.value = withSpring(0.98);
        opacity.value = withTiming(0.8);
    };

    const handlePressOut = () => {
        scale.value = withSpring(1);
        opacity.value = withTiming(1);
    };

    return (
        <AnimatedPressable
            onPress={() => handleTrackSelect(track)}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[styles.trackItemContainer, animatedStyle]}
            android_ripple={{
                color: Platform.select({
                    android: "rgba(255, 255, 255, 0.1)",
                    default: "transparent",
                }),
            }}
        >
            <View style={styles.imageContainer}>
                <FastImage
                    source={{
                        uri: track.artwork ?? unknownTrackImageUri,
                        priority: FastImage.priority.normal,
                    }}
                    style={{
                        ...styles.trackArtworkImage,
                        opacity: isActiveTrack ? 0.6 : 1,
                    }}
                />
                {isActiveTrack &&
                    (playing ? (
                        <LoaderKit
                            style={styles.trackPlayingIconIndicator}
                            name="LineScaleParty"
                            color={colors.background}
                        />
                    ) : (
                        <Ionicons
                            style={styles.trackPausedIndicator}
                            name="play"
                            size={24}
                            color={colors.background}
                        />
                    ))}
            </View>
            <View style={styles.information}>
                <View style={{ width: "100%" }}>
                    <Text
                        numberOfLines={1}
                        style={{
                            ...styles.trackTitleText,
                            color: isActiveTrack ? colors.primary : colors.text,
                        }}
                    >
                        {track.title}
                    </Text>
                    {track.artist && (
                        <Text numberOfLines={1} style={styles.trackArtistText}>
                            {track.artist}
                        </Text>
                    )}
                </View>
                <Entypo
                    name="dots-three-horizontal"
                    size={18}
                    color={colors.icon}
                />
            </View>
        </AnimatedPressable>
    );
};

const styles = StyleSheet.create({
    trackItemContainer: {
        flexDirection: "row",
        columnGap: 14,
        alignItems: "center",
        paddingRight: 20,
        paddingVertical: 8,
        paddingLeft: 8,
    },
    imageContainer: {
        position: "relative",
    },
    trackPlayingIconIndicator: {
        position: "absolute",
        top: 18,
        left: 16,
        width: 16,
        height: 16,
    },
    trackPausedIndicator: {
        position: "absolute",
        top: 14,
        left: 14,
    },
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50,
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: fontSize.sm,
        fontWeight: "600",
        maxWidth: "90%",
    },
    trackArtistText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4,
    },
    information: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
