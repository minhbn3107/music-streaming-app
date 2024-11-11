import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Header from "@/components/Header";
import { item1Uri } from "@/constants/images";
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={{ padding: 10 }}>
                <View>
                    <Text style={{ fontSize: 22 }}>Good morning</Text>
                    <Text style={{ fontSize: 28 }}>AshLey Phong</Text>
                </View>
                <View style={styles.boxSearch}>
                    <TextInput
                        placeholder="What you want to listen to"
                        style={{ paddingLeft: 10, fontSize: 15 }}
                    />
                    <FontAwesome name="search" style={styles.iconS} size={20} />
                </View>
                <View>
                    <Text
                        style={{
                            fontWeight: "500",
                            fontSize: 17,
                            marginBottom: 15,
                        }}
                    >
                        Suggestions for you{" "}
                    </Text>
                    <ScrollView
                        horizontal
                        style={styles.lineFLexItem}
                        showsHorizontalScrollIndicator={true}
                    >
                        <View style={styles.boxItemS}>
                            <Image
                                source={{ uri: item1Uri }}
                                style={styles.boxImg}
                            />
                            <View style={styles.boxItem}>
                                <Text style={styles.textItem}>
                                    Refleciton 1
                                </Text>
                                <Text style={styles.textItem}>
                                    Christina Aguiera
                                </Text>
                            </View>
                        </View>

                        <View style={styles.boxItemS}>
                            <Image
                                source={{ uri: item1Uri }}
                                style={styles.boxImg}
                            />
                            <View style={styles.boxItem}>
                                <Text style={styles.textItem}>
                                    Refleciton 2
                                </Text>
                                <Text style={styles.textItem}>
                                    Christina Aguiera
                                </Text>
                            </View>
                        </View>

                        <View style={styles.boxItemS}>
                            <Image
                                source={{ uri: item1Uri }}
                                style={styles.boxImg}
                            />
                            <View style={styles.boxItem}>
                                <Text style={styles.textItem}>
                                    Refleciton 2
                                </Text>
                                <Text style={styles.textItem}>
                                    Christina Aguiera
                                </Text>
                            </View>
                        </View>
                    </ScrollView>

                    <View>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Charts</Text>
                            <Text style={styles.seeAll}>See all</Text>
                        </View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.scrollView}
                        >
                            <ChartCard title="Top 50" subtitle="Canada" />
                            <ChartCard title="Top 50" subtitle="Global" />
                            <ChartCard title="Top 50" subtitle="Trending" />
                            {/* Add more cards if needed */}
                        </ScrollView>
                    </View>

                    <View style={styles.afd}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>
                                Popular artists
                            </Text>
                            <Text style={styles.seeAll}>See all</Text>
                        </View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.scrollView}
                        >
                            <ArtistCard
                                imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZS0jFZ2m_hDIoej7mVS2NyAJtUXlhlxbsbg&s"
                                name="Jennifer Wilson"
                            />
                            <ArtistCard
                                imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZS0jFZ2m_hDIoej7mVS2NyAJtUXlhlxbsbg&s"
                                name="Elizabeth Hall"
                            />
                            <ArtistCard
                                imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZS0jFZ2m_hDIoej7mVS2NyAJtUXlhlxbsbg&s"
                                name="Anthony James"
                            />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
const ChartCard = ({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) => (
    <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
        <Text style={styles.cardUpdate}>Daily chart-toppers update</Text>
    </TouchableOpacity>
);

const ArtistCard = ({ imageUri, name }: { imageUri: string; name: string }) => (
    <View style={styles.artistCard}>
        <Image source={{ uri: imageUri }} style={styles.artistImage} />
        <Text style={styles.artistName}>{name}</Text>
        <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
    },
    boxSearch: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        position: "relative",
        marginTop: 10,
        marginBottom: 10,
    },
    lineFLexItem: {
        flexDirection: "row",
    },
    iconS: {
        position: "absolute",
        right: 8,
        top: 8,
    },
    boxItem: {
        position: "absolute",
        bottom: 5,
        padding: 10,
    },
    boxImg: {
        width: 250,
        height: 320,
    },
    boxItemS: {
        marginRight: 15,
    },
    textItem: {
        fontSize: 19,
        fontWeight: "500",
        color: "#fff",
        padding: 5,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    seeAll: {
        color: "blue",
        fontSize: 16,
    },
    scrollView: {
        flexDirection: "row",
    },
    card: {
        width: 150,
        height: 200,
        borderRadius: 12,
        marginRight: 12,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d1c4e9", // background color similar to the gradient effect
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    cardSubtitle: {
        fontSize: 16,
        color: "#fff",
        marginBottom: 8,
    },
    cardUpdate: {
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
    },

    afd: {
        padding: 16,
        backgroundColor: "#fff",
    },
    headerA: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    headerTextA: {
        fontSize: 20,
        fontWeight: "bold",
    },
    seeAllA: {
        color: "blue",
        fontSize: 16,
    },
    scrollViewA: {
        flexDirection: "row",
    },
    artistCard: {
        alignItems: "center",
        marginRight: 16,
    },
    artistImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 8,
    },
    artistName: {
        fontSize: 14,
        color: "#333",
        marginBottom: 4,
    },
    followButton: {
        backgroundColor: "#000",
        borderRadius: 16,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    followButtonText: {
        color: "#fff",
        fontSize: 14,
    },
});

export default HomeScreen;
