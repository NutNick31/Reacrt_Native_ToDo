import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.textInput}
                placeholder="Enter a value"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        padding: 8,
        marginRight: 8,
      },
})

export default GoalInput;