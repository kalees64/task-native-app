// Icons
import Ionicons from "@expo/vector-icons/Ionicons";

// Native Components

const TaskStatusIcon = ({ status }: { status: string }) => {
  if (status === "pending") {
    return (
      <Ionicons name="checkmark-done-circle-outline" size={24} color="black" />
    );
  }
  if (status === "completed") {
    return (
      <Ionicons name="checkmark-done-circle-sharp" size={24} color="black" />
    );
  }
};

export default TaskStatusIcon;
