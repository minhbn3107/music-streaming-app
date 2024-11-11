import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { item1Uri } from "@/constants/images";
import { router } from "expo-router";
const ARRAY_POST = [
    {
        id: 1,
        name: "Jessica Gonzalez",
        tick: true,
        des: "Posted a track",
        time: "3d",
        image: item1Uri,
        content: "FLOWER",
        quanlitiPlay: 125,
        timePost: "05:15",
        quanlityTym: 20,
        quanlityComment: 3,
        quanlityShare: 1,
    },
    {
        id: 2,
        name: "William King",
        tick: true,
        des: "Posted a track",
        time: "5d",
        image: item1Uri,
        content: "Me",
        quanlitiPlay: 245,
        timePost: "05:15",
        quanlityTym: 45,
        quanlityComment: 9,
        quanlityShare: 2,
    },
];
const FeedScreen = () => {
    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.postContainer}>
            <View style={styles.userInfo}>
                <Image source={{ uri: item.image }} style={styles.userAvatar} />
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.userDescription}>
                        {item.des} • {item.time}
                    </Text>
                </View>
            </View>
            <Image source={{ uri: item.image }} style={styles.postImage} />
            <View style={styles.postContent}>
                <Text style={styles.contentTitle}>{item.content}</Text>
                <View style={styles.contentStats}>
                    <Text style={styles.contentSubtitle}>{item.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.userName}>
                            ▶ {item.quanlitiPlay}
                        </Text>
                        <Text style={styles.userName}>• {item.timePost}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.action}>
                    <FontAwesome name="heart" size={16} />
                    <Text style={styles.actionText}>{item.quanlityTym}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.action}
                    onPress={() => router.navigate("/feedcomment")}
                >
                    <FontAwesome name="comment" size={16} />
                    <Text style={styles.actionText}>
                        {item.quanlityComment}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <FontAwesome name="share" size={16} />
                    <Text style={styles.actionText}>{item.quanlityShare}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Feed</Text>
                <Feather name="cast" size={24} color="black" />
            </View>
            <FlatList
                data={ARRAY_POST}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    postContainer: {
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        marginBottom: 20,
        overflow: "hidden",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    userDetails: {
        marginLeft: 10,
    },
    userName: {
        fontWeight: "bold",
        color: "#fff",
    },
    userDescription: {
        color: "#888",
    },
    postImage: {
        width: "100%",
        height: 200,
    },
    postContent: {
        padding: 10,
        backgroundColor: "#000",
        opacity: 0.8,
    },
    contentTitle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    contentSubtitle: {
        color: "#fff",
        marginBottom: 5,
    },
    contentStats: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#fff",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    },
    action: {
        flexDirection: "row",
        alignItems: "center",
    },
    actionText: {
        marginLeft: 5,
    },
});

export default FeedScreen;
