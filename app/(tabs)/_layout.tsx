import { FloatingPlayer } from "@/components/FloatingPlayer";
import { colors, fontSize } from "@/constants/tokens";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsNavigation = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: colors.primary,
                    tabBarLabelStyle: {
                        fontSize: fontSize.xs,
                        fontWeight: "500",
                    },
                    headerShown: false,
                    tabBarStyle: {
                        position: "absolute",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopWidth: 0,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="home" size={20} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        title: "Search",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="search"
                                size={28}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="feed"
                    options={{
                        title: "Feed",
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons
                                name="dynamic-feed"
                                size={20}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="(library)"
                    options={{
                        title: "Library",
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="library" size={24} color={color} />
                        ),
                    }}
                />
            </Tabs>
            <FloatingPlayer
                style={{
                    position: "absolute",
                    left: 8,
                    right: 8,
                    bottom: 65,
                }}
            />
        </>
    );
};

export default TabsNavigation;
