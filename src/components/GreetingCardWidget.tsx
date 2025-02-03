// Native Components
import { Text, View } from "react-native";

// Icons
import Feather from "@expo/vector-icons/Feather";

const GreetingCardWidget = ({ userName }: { userName: string }) => {
  return (
    <View className="p-5 rounded m-2 bg-white shadow mt-12 flex flex-row justify-between">
      <View>
        <Text className="text-4xl font-bold text-blue-700 ">Good Morning</Text>
        <Text className="text-3xl font-semibold  pt-2 ">{userName}</Text>
      </View>
      <View className="flex items-center justify-center  rounded-full w-16 h-16">
        <Feather name="sun" size={50} color="blue" />
      </View>
    </View>
  );
};

export default GreetingCardWidget;
