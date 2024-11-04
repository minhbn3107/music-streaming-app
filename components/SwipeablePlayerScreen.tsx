import React, { type PropsWithChildren } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
    runOnJS,
    type SharedValue,
} from "react-native-reanimated";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const DISMISS_THRESHOLD = SCREEN_HEIGHT * 0.2;

interface GestureContext {
    y: number;
}

interface SwipeablePlayerScreenProps extends PropsWithChildren {
    onDismiss?: () => void;
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "transparent", // Changed to transparent
    },
    container: {
        flex: 1,
        position: "absolute",
        top: 50,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "transparent", // Changed to transparent
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export const SwipeablePlayerScreen: React.FC<SwipeablePlayerScreenProps> = ({
    children,
    onDismiss,
}) => {
    const insets = useSafeAreaInsets();
    const translateY: SharedValue<number> = useSharedValue(0);
    const context: SharedValue<GestureContext> = useSharedValue({ y: 0 });
    const overlayOpacity = useSharedValue(1);

    const dismissScreen = () => {
        if (onDismiss) {
            onDismiss();
        }
        router.back();
    };

    const panGesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value };
        })
        .onUpdate((event) => {
            if (event.translationY < 0) {
                translateY.value = context.value.y + event.translationY * 0.1;
            } else {
                translateY.value = context.value.y + event.translationY;
            }
            // Update overlay opacity based on translation
            overlayOpacity.value = Math.max(
                0,
                1 - translateY.value / SCREEN_HEIGHT
            );
        })
        .onEnd((event) => {
            if (translateY.value > DISMISS_THRESHOLD && event.velocityY > 0) {
                overlayOpacity.value = withTiming(0, { duration: 200 });
                translateY.value = withSpring(
                    SCREEN_HEIGHT,
                    {
                        damping: 20,
                        stiffness: 90,
                        velocity: event.velocityY,
                    },
                    () => {
                        runOnJS(dismissScreen)();
                    }
                );
            } else {
                overlayOpacity.value = withTiming(1, { duration: 200 });
                translateY.value = withSpring(0, {
                    damping: 20,
                    stiffness: 90,
                });
            }
        });

    const containerStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
        height: SCREEN_HEIGHT - insets.top,
    }));

    const overlayStyle = useAnimatedStyle(() => ({
        opacity: overlayOpacity.value,
    }));

    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={[styles.overlay, overlayStyle]} />
            <GestureDetector gesture={panGesture}>
                <Animated.View style={[styles.container, containerStyle]}>
                    {children}
                </Animated.View>
            </GestureDetector>
        </View>
    );
};
