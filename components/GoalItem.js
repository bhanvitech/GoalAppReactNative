import { StyleSheet } from 'react-native';
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Pressable
} from 'react-native';
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={() => props.onDeleteItem(props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    color: '#fff',
    padding: 8,
    margin: 8,
    borderRadius: 6, //ios me borderradius supoort nh krta toh hum usko view me wrap krdenge toh chljyga>
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: '#fff',
    padding: 8
  }
});
