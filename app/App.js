/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import ReviewList from "./ReviewList";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { Header } from "react-native-elements";
import WriteReview from "./writeReview";
import console from "console";

export default class App extends Component {
  state = { loading: true, modalVisible: false };

  componentDidMount() {
    const { contract, web3 } = this.props;

    /*
    this.unsubscribe = drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState();

      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
    */
   
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Tech square Labs', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          />
        <View style={styles.container}>
                <View style={styles.listContainer}>
                  <View>
                    <ReviewList 
                    contract={this.props.contract}
                    web3={this.props.web3}
                    />
                  </View>
                  <View>
                    <WriteReview contract={this.props.contract} web3={this.props.web3} visible={this.state.modalVisible} exit={this.hideModal} style={styles.modal} />
                  </View>
                </View>
          </View>
            <View style={styles.bottom}>
              <Button
                backgroundColor="Blue"
                title="write Review"
                onPress={() => (this.setState({modalVisible: true}))}
                />
            </View>
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    color: "red",
    position: "relative",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  modal: {
    flex: 1,
    alignItems: "flex-end",
    position: 'relative'
  },
  bottom: {
    top: 700
  },
});
