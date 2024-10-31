import library from "@/assets/data/library.json";
import { TracksList } from "@/components/TracksList";
import { screenPadding } from "@/constants/tokens";
import { trackTitleFilter } from "@/helpers/filter";
import { useNavigationSearch } from "@/hooks/useNavigationSearch";
import { defaultStyles } from "@/styles";
import { useMemo } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

const SongsScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: "Find in songs",
        },
    });
    const filteredTracks = useMemo(() => {
        if (!search) return library;
        return library.filter(trackTitleFilter(search));
    }, [search]);

    return (
        <View style={[defaultStyles.container, styles.contentContainer]}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{
                    paddingHorizontal: screenPadding.horizontal,
                }}
            >
                <TracksList tracks={filteredTracks} scrollEnabled={false} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 110,
    },
});

export default SongsScreen;
