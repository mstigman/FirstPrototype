import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet, Button, TextInput } from 'react-native';
import console from "console";

export class WriteReview extends Component {
  state = {
    inputText: "beep"
  };


  sendReview(content) {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.protoReviewSystem;
    this.state = drizzle.store.getState();

    const reviewKey = contract.methods.writeReview(content, 1).send({from: '0x4c5657fa09F2B949F0373051bd0B7f03c41e24dd', gas: 600000});
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={inputText => this.setState({inputText})}
                value={this.state.inputText}
                />
                <Button
                backgroudColor="Blue"
                title="Publish review"
                onPress={() => this.sendReview(this.state.inputText)}
                />
            </View>
          </View>
          <Button
                backgroudColor="Blue"
                title="exit"
                onPress={() => this.props.exit()}
            />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 30,
     flexDirection: "row",
     borderWidth: 0,
     position: "relative",
     top: 500
    },
    item: {
      padding: 0,
      fontSize: 15,
      height: 20,
    },
    bottom: {
        justifyContent: 'flex-end',
        marginBottom: 36,
        top: 700
    },
  })

export default WriteReview;