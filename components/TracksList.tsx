import { utilsStyles } from "@/styles";
import { FlatList, FlatListProps, View, Text, Image } from "react-native";
import { TrackListItem } from "./TrackListItem";
import { unknownTrackImageUri } from "@/constants/images";
import { useSoundStore, Track } from "@/hooks/useSoundStore";
export type TracksListProps = Partial<FlatListProps<Track>> & {
    tracks: Track[];
};
const ItemDivider = () => (
    <View
        style={{
            ...utilsStyles.itemSeparator,
            marginVertical: 9,
            marginLeft: 60,
        }}
    />
);
export const TracksList = ({ tracks, ...flatlistProps }: TracksListProps) => {
    const { play, setVolume } = useSoundStore();
    const handleTrackSelect = async (track: Track) => {
        await play(track);
        setVolume(1);
    };

    return (
        <FlatList
            data={tracks}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            ListEmptyComponent={
                <View>
                    <Text style={utilsStyles.emptyContentText}>
                        No songs found
                    </Text>
                    <Image
                        source={{
                            uri: unknownTrackImageUri,
                        }}
                        style={utilsStyles.emptyContentImage}
                    />
                </View>
            }
            renderItem={({ item: track }) => (
                <TrackListItem
                    track={track}
                    onTrackSelect={handleTrackSelect}
                />
            )}
            {...flatlistProps}
        />
    );
};
