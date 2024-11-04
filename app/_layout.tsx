import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLogTrackPlayerState } from "@/hooks/useLogTrackPlayerState";
import { useSetupTrackPlayer } from "@/hooks/useSetupTrackPlayer";
import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const App = () => {
    const handleTrackPlayerLoaded = useCallback(() => {
        SplashScreen.hideAsync();
    }, []);
    useSetupTrackPlayer({
        onLoad: handleTrackPlayerLoaded,
    });
    useLogTrackPlayerState();

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <RootNavigation />

                <StatusBar style="auto" />
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
};
const RootNavigation = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
                name="player"
                options={{
                    presentation: "containedTransparentModal",
                    gestureEnabled: false,
                    gestureDirection: "vertical",
                    animationDuration: 600,
                    headerShown: false,
                    animation: "slide_from_bottom",
                }}
            />
        </Stack>
    );
};

export default App;
