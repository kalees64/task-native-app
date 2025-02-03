// Native Components
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";

// Styles
import "./../../global.css";

// Components
import GreetingCardWidget from "../components/GreetingCardWidget";
import TaskStatusIcon from "../components/TaskStatusIcon";

// Hooks
import { useEffect, useState } from "react";

// Icons
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Utils

const Home = () => {
  const [tasks, setTasks] = useState<any[]>();

  useEffect(() => {
    // Fetch tasks
    setTasks([
      { id: 1, title: "Task 1", completed: false, status: "pending" },
      { id: 2, title: "Task 2", completed: false, status: "completed" },
      { id: 3, title: "Task 3", completed: false, status: "pending" },
    ]);
  }, []);

  return (
    <View className="flex-1 bg-white mt-0 pt-0 px-2 relative">
      {/* User name & wish */}
      <GreetingCardWidget userName="Kalees" />

      {/* Tasks */}
      <View className=" py-6">
        <View className="flex flex-row items-center justify-between px-4">
          <Text className="text-2xl font-bold">Tasks</Text>
          <AntDesign name="plussquareo" size={24} color="black" />
        </View>
      </View>

      {/* Tasks List */}
      <View className="flex-1 flex flex-row gap-3 overflow-x-auto px-4 ">
        <ScrollView contentContainerClassName="gap-3">
          {tasks && tasks.length > 0 ? (
            tasks.map((task: any) => {
              return (
                <View
                  className="rounded-lg p-4 flex flex-row justify-between bg-cyan-200 border-blue-400  "
                  key={task.id}
                >
                  <View>
                    <Text className="text-2xl font-bold">{task.title}</Text>
                    <Text className="">Task Date</Text>
                  </View>
                  <View className="flex flex-row items-center gap-2">
                    <TaskStatusIcon status={task.status} />
                    <AntDesign name="edit" size={24} color="black" />
                    <MaterialCommunityIcons
                      name="delete-empty-outline"
                      size={24}
                      color="black"
                    />
                  </View>
                </View>
              );
            })
          ) : (
            <Text>No tasks found</Text>
          )}
        </ScrollView>
      </View>

      {/* Add Task Icon */}
      <View className="absolute bottom-10 size-20 right-10 bg-blue-700  rounded-full flex items-center justify-center ">
        <FontAwesome name="plus" size={30} color="white" />
      </View>

      {/* Status bar */}
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
