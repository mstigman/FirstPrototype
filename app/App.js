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

type Props = {};
export default class App extends Component<Props> {
  state = { loading: true, drizzleState: null, modalVisible: false };

  componentDidMount() {
    const { drizzle, web3 } = this.props;

    this.unsubscribe = drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState();

      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
    this.hideModal = this.hideModal.bind(this);
  }

  componentWillUnmount() {
    this.unsubscribe();
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
          {this.state.loading ? (
              <Text>Loading...</Text>
              ) : ( 
                <View style={styles.listContainer}>
                  <View>
                    <Text>Drizzle ready</Text>
                  </View>
                  <View>
                    <ReviewList 
                    drizzle={this.props.drizzle}
                    drizzleState={this.state.drizzleState}
                    />
                  </View>
                  <View>
                    <WriteReview drizzle={this.props.drizzle} drizzleState={this.state.drizzleState} visible={this.state.modalVisible} exit={this.hideModal} style={styles.modal} />
                  </View>
                </View>
              )}
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
