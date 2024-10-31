import { utilsStyles } from "@/styles";
import { FlatList, FlatListProps, View } from "react-native";
import { TrackListItem } from "./TrackListItem";

const ItemDivider = () => (
    <View
        style={{
            ...utilsStyles.itemSeparator,
            marginVertical: 9,
            marginLeft: 60,
        }}
    />
);
export const TracksList = ({ tracks, ...flatlistProps }: any) => {
    return (
        <FlatList
            data={tracks}
            contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            renderItem={({ item: track }) => (
                <TrackListItem
                    track={{
                        ...track,
                        image: track.artwork,
                    }}
                />
            )}
            {...flatlistProps}
        />
    );
};
