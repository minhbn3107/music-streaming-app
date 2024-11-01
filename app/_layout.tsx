import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLogTrackPlayerState } from "@/hooks/useLogTrackPlayerState";
import { useSetupTrackPlayer } from "@/hooks/useSetupTrackPlayer";
import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";

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
            <RootNavigation />
            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
};
const RootNavigation = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
};

export default App;
