import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const App = () => {
    const handleTrackPlayerLoaded = useCallback(() => {
        SplashScreen.hideAsync();
    }, []);

    useEffect(() => {
        handleTrackPlayerLoaded();
    }, [handleTrackPlayerLoaded]);

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
            <Stack.Screen name="index" options={{ headerShown: false }} />
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
            <Stack.Screen
                name="feedcomment"
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
