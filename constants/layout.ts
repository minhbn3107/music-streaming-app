import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { colors } from "./tokens";
export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
    headerLargeTitle: true,
    headerLargeStyle: {
        backgroundColor: colors.background,
    },
    headerLargeTitleStyle: {
        color: colors.text,
    },
    headerTitleStyle: {
        fontSize: 35,
        fontWeight: "bold",
    },
    headerTintColor: colors.text,
    headerTransparent: true,
    headerBlurEffect: "prominent",
    headerShadowVisible: false,
};
