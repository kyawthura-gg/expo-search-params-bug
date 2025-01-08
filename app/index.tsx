import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { useRoute as useRNRoute } from "@react-navigation/native";

export default function HomeScreen() {
  const router = useRouter();
  const rnRoute = useRNRoute();
  const params = useLocalSearchParams();
  const sortBy = params.sortBy;
  console.log({ sortBy, rnSortBy: rnRoute.params?.sortBy });

  return (
    <View style={{ flex: 1, marginTop: "30%" }}>
      <Text>
        Expo: {sortBy} || React Navigation:{rnRoute.params?.sortBy}
      </Text>
      <Text>
        Type: {typeof sortBy}: {typeof rnRoute.params?.sortBy}
      </Text>

      <Text
        style={{
          marginTop: 10,
          backgroundColor: sortBy === "oldest" ? "gray" : undefined,
        }}
        onPress={() =>
          router.setParams({
            sortBy: sortBy === "oldest" ? undefined : "oldest",
          })
        }
      >
        Sort By: Oldest
      </Text>
    </View>
  );
}
