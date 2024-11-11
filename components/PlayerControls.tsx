import { colors } from "@/constants/tokens";
import { useSoundStore } from "@/hooks/useSoundStore";
import { FontAwesome6, FontAwesome, Entypo } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
type PlayerControlsProps = {
    style?: ViewStyle;
};
type PlayerButtonProps = {
    style?: ViewStyle;
    iconSize?: number;
};
export const PlayerControls = ({ style }: PlayerControlsProps) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.row}>
                <ShuttleButton />
                <SkipToPreviousButton />
                <PlayPauseButton />
                <SkipToNextButton />
                <ThreeDotsButton />
            </View>
        </View>
    );
};
export const ShuttleButton = ({ iconSize = 30 }: PlayerButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log("random")}
        >
            <FontAwesome
                name="random"
                size={iconSize}
                color={colors.background}
            />
        </TouchableOpacity>
    );
};
export const PlayPauseButton = ({
    style,
    iconSize = 48,
}: PlayerButtonProps) => {
    const { isPlaying, pause, resume } = useSoundStore();
    return (
        <View style={[{ height: iconSize }, style]}>
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={isPlaying ? pause : resume}
            >
                <FontAwesome6
                    name={isPlaying ? "pause" : "play"}
                    size={iconSize}
                    color={colors.background}
                />
            </TouchableOpacity>
        </View>
    );
};
export const SkipToNextButton = ({ iconSize = 30 }: PlayerButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log("skip to next")}
        >
            <FontAwesome6
                name="forward"
                size={iconSize}
                color={colors.background}
            />
        </TouchableOpacity>
    );
};
export const SkipToPreviousButton = ({ iconSize = 30 }: PlayerButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log("skip to previous")}
        >
            <FontAwesome6
                name={"backward"}
                size={iconSize}
                color={colors.background}
            />
        </TouchableOpacity>
    );
};
export const ThreeDotsButton = ({ iconSize = 30 }: PlayerButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log("three")}
        >
            <Entypo
                name="dots-three-horizontal"
                size={iconSize}
                color={colors.background}
            />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
});
