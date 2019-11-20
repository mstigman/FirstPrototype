import React from "react";
import { Text, View, Button, TextInput, StyleSheet, ScrollView, FlatList } from "react-native";
import { Header } from "react-native-elements";
import console from "console";

class Review extends React.Component {
    state = {reviewKey: null}

    componentDidMount() {
        const { drizzle, drizzleState, reviewID } = this.props;
        const contract = drizzle.contracts.protoReviewSystem;
        this.state = drizzle.store.getState()

        // let drizzle know we want to watch the `myString` method
        //const ID = contract.getReviewIDsFromReviewable[reviewIdsKey];

        let reviewKey;
        if (reviewID) {
            reviewKey = contract.methods.getReview.cacheCall(parseInt(reviewID, 10));
        } else {
            reviewKey = null;
        }
        // save the `dataKey` to local component state for later reference
        this.setState({ reviewKey });
      }

      loadReview() {
        const { drizzle, drizzleState, reviewID } = this.props;
        const contract = drizzle.contracts.protoReviewSystem;
        this.state = drizzle.store.getState()

        // let drizzle know we want to watch the `myString` method
        //const ID = contract.getReviewIDsFromReviewable[reviewIdsKey];
        const reviewKey = contract.methods["getReview"].cacheCall(reviewID);
        // save the `dataKey` to local component state for later reference
        this.setState({ reviewKey });
      }
    render() {
        const { protoReviewSystem } = this.props.drizzleState.contracts;
        const review = protoReviewSystem.getReview[this.state.reviewKey];
        if (!this.state.reviewKey && this.props.reviewID) {
            this.loadReview();
        }
        return (
            <View style={styles.container}>
                <Text style={styles.item}>{review && review.value[0]}</Text>
                <View>
                  <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                  /> 
                  <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>
              </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 30,
     flexDirection: "row",
     borderWidth: .5,
     height: 100
    },
    item: {
      padding: 0,
      fontSize: 15,
      height: 20,
    },
    button: {
      padding: 1,
      height: 50
    }
  })

export default Review;