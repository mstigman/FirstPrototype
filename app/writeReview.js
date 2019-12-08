import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet, Button, TextInput } from 'react-native';
import console from "console";

export class WriteReview extends Component {
  state = {
    inputText: "",
    count: 0
  };

  componentDidMount() {
    this.props.web3.eth.getTransactionCount("0x990ED529F481c77AA92d05FA56609CD927934406").then((count) => {
      this.setState({ count: count });
    })
  }

  sendReview(content) {
    const tx = {
      // this could be provider.addresses[0] if it exists
      from: "0x990ED529F481c77AA92d05FA56609CD927934406", 
      // target address, this could be a smart contract address
      to: this.props.contract.options.address, 
      // optional if you want to specify the gas limit 
      gas: 600000,
      nonce: this.state.count, 
      // optional if you are invoking say a payable function 
      //value: value,
      // this encodes the ABI of the method and the arguements
      data: this.props.contract.methods.writeReview(content, 1, 0).encodeABI() 
    };

    this.props.web3.eth.accounts.signTransaction(tx, "0xBD1097FA93E8497EC33D7A92F92FB8D7375C2671D206BD99E8AD728A91379776").then((signedTx) => {  // raw transaction string may be available in .raw or 
      // .rawTransaction depending on which signTransaction
      // function was called
      console.log("transaction sent");
      const sentTx = this.props.web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);  
      
      sentTx.on("receipt", receipt => {
        console.log(receipt)
      });
      sentTx.on("error", err => {
        console.log("error" + err);
      });
    }).catch((err) => {
      console.log(err);
    });

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