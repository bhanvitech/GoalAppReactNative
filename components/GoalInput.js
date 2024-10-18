import { useState } from 'react';
import { View, Button, TextInput, Modal, Image } from 'react-native';
import { StyleSheet } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setenteredGoalText] = useState('');
  function goalInputHandler(value) {
    setenteredGoalText(value);
  }
  function handleAddGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setenteredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              color="#b180f0"
              onPress={handleAddGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 24,
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#efd0ff',
    backgroundColor: '#efd0ff',
    color: '#120438',
    padding: 16,
    borderRadius: 6,

    width: '100%',

    padding: 8
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    // resizeMode: 'contain',
    margin: 20
  }
});
