import React from 'react';
import {
  Modal,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class UpdateValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }
  render() {
    const {visible, close, editFunction} = this.props;
    const {title, body} = this.state;

    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => close()}>
        <View style={styles.card}>
          <View style={styles.box}>
            <TextInput
              placeholder="Title"
              style={styles.inputBox}
              onChangeText={(text) =>
                this.setState({...this.state, title: text})
              }
            />

            <TextInput
              placeholder="Body"
              style={styles.inputBox}
              onChangeText={(text) =>
                this.setState({...this.state, body: text})
              }
            />

            <TouchableOpacity
              onPress={() => {
                editFunction(this.props.id, title, body);
                close();
              }}
              style={styles.button}>
              <Text style={styles.txt}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#F6F6F6',
    width: '80%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#E67E22',
    width: '90%',
    borderRadius: 20,
  },
  inputBox: {
    width: '90%',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'black',
    color: 'grey',
    padding: 15,
  },
  button: {
    width: '50%',
    margin: 10,

    backgroundColor: 'green',
  },
  txt: {
    textAlign: 'center',
    fontSize: 30,
  },
});