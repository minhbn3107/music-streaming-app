import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactNode } from "react";

interface ScreenLayoutProps {
    children: ReactNode;
}

export const ScreenLayout = ({ children }: ScreenLayoutProps) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>{children}</View>
        </SafeAreaView>
    );
};
