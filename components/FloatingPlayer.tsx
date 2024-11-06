import { PlayPauseButton, SkipToNextButton } from "@/components/PlayerControls";
import { unknownTrackImageUri } from "@/constants/images";
import { useLastActiveTrack } from "@/hooks/useLastActiveTrack";
import { defaultStyles } from "@/styles";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    ViewProps,
    Text,
} from "react-native";
import FastImage from "react-native-fast-image";
import { useActiveTrack } from "react-native-track-player";
import { useRouter } from "expo-router";
import { Marquee } from "@animatereactnative/marquee";

export const FloatingPlayer = ({ style }: ViewProps) => {
    const router = useRouter();
    const activeTrack = useActiveTrack();
    const lastActiveTrack = useLastActiveTrack();
    const displayedTrack = activeTrack ?? lastActiveTrack;

    const handlePress = () => {
        router.navigate("/player");
    };

    if (!displayedTrack) return null;
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.9}
            style={[styles.container, style]}
        >
            <>
                <FastImage
                    source={{
                        uri: displayedTrack.artwork ?? unknownTrackImageUri,
                    }}
                    style={styles.trackArtworkImage}
                />
                <View style={styles.trackTitleContainer}>
                    {displayedTrack.title?.length &&
                    displayedTrack.title?.length > 25 ? (
                        <Marquee spacing={150} speed={1}>
                            <Text style={styles.trackTitle}>
                                {displayedTrack.title}
                            </Text>
                        </Marquee>
                    ) : (
                        <Text style={styles.trackTitle}>
                            {displayedTrack.title}
                        </Text>
                    )}
                    {displayedTrack.artist?.length &&
                    displayedTrack.artist?.length > 30 ? (
                        <Marquee spacing={150} speed={1}>
                            <Text style={styles.trackArtist}>
                                {displayedTrack.artist}
                            </Text>
                        </Marquee>
                    ) : (
                        <Text style={styles.trackArtist}>
                            {displayedTrack.artist || "Unknown Artist"}
                        </Text>
                    )}
                </View>
                <View style={styles.trackControlsContainer}>
                    <PlayPauseButton iconSize={24} />
                    <SkipToNextButton iconSize={22} />
                </View>
            </>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#252525",
        padding: 8,
        borderRadius: 12,
        paddingVertical: 10,
    },
    trackArtworkImage: {
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    trackTitleContainer: {
        flex: 1,
        overflow: "hidden",
        marginLeft: 10,
    },
    trackTitle: {
        ...defaultStyles.text,
        fontSize: 18,
        fontWeight: "600",
        paddingLeft: 10,
    },
    trackArtist: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
        paddingLeft: 10,
    },
    trackControlsContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 20,
        marginRight: 16,
        paddingLeft: 16,
    },
});
