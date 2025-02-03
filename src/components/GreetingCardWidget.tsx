// Native Components
import { Text, View } from "react-native";

// Icons
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

// Packages

const GreetingCardWidget = ({ userName }: { userName: string }) => {
  const date = new Date();
  const hours = date.getHours();

  const greeting =
    hours < 12
      ? "Good Morning"
      : hours < 18
      ? "Good Afternoon"
      : hours < 20
      ? "Good Evening"
      : "Good Night";

  const greetingIcon =
    hours < 12 ? (
      <Feather name="sunrise" size={50} color="blue" />
    ) : hours < 18 ? (
      <Feather name="sun" size={50} color="blue" />
    ) : hours < 20 ? (
      <FontAwesome5 name="cloud-sun" size={50} color="blue" />
    ) : (
      <Feather name="moon" size={50} color="blue" />
    );

  return (
    <View className="p-5 rounded m-2 bg-white shadow mt-12 flex flex-row justify-between">
      <View>
        <Text className="text-4xl font-bold text-blue-700 ">{greeting}</Text>
        <Text className="text-3xl font-semibold  pt-2 ">{userName}</Text>
      </View>
      <View className="flex items-center justify-center  rounded-full w-16 h-16">
        {/* <Feather name="sun" size={50} color="blue" /> */}
        {greetingIcon}
      </View>
    </View>
  );
};

export default GreetingCardWidget;
