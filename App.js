import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);
  const [modalOpen, setmodalOpen] = useState(false);
  function addGoalHandler(enteredGoalText) {
    setcourseGoals(prev => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setcourseGoals(prev => prev.filter(x => x.id !== id));
  }
  function startAddGoalHandler() {
    setmodalOpen(true);
  }
  function endAddGoalHandler() {
    setmodalOpen(false);
  }
  //scrollview css holding the parent css
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      {/* Only hold other component no text or somthing */}
      <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalOpen}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBoundVertical={false}> list can become very long so u should use flatlist which for scrollable list with lazy loading */}
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                id={itemData.item.id} //for unique key in flatlist in case of array
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => item.id} //for unique key in flatlist
          alwaysBoundVertical={false}
        />
      </View>
    </View>
    </>
 
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a'
  },

  goalsContainer: {
    flex: 4
  }
});
