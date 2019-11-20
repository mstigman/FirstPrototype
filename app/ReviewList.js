import React from "react";
import { Text, View, Button, TextInput, StyleSheet, ScrollView, FlatList } from "react-native";
import { Header } from "react-native-elements";
import console from "console";
import Review from "./Review";

class ReviewList extends React.Component {
    state = {reviewIdsKey: null, reviewIDs: null}
    updated = false;
    //state = {reviewIdsKey: null}

    componentDidMount() {
        const { drizzle } = this.props;
        const contract = drizzle.contracts.protoReviewSystem;
        this.state = drizzle.store.getState()

        // let drizzle know we want to watch the `myString` method
        const reviewIdsKey = contract.methods["getReviewIDsFromReviewable"].cacheCall(1, 0);

        // save the `dataKey` to local component state for later reference
        this.setState({ reviewIdsKey });
      }
    render() {
        const { protoReviewSystem } = this.props.drizzleState.contracts;
        const reviewIDs = protoReviewSystem.getReviewIDsFromReviewable[this.state.reviewIdsKey];
        const test = reviewIDs && reviewIDs.value[0];

        let reviews = [];
        if (reviewIDs) {
            reviews = reviewIDs.value.map((ID) =>
            <Review drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} reviewID={ID}></Review>
            );
            /*
            for (let i = 0; i < reviewIDs.value.length; i++) {
                reviews.push(<Review drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} reviewID={reviewIDs.value[i]}></Review>)
            }
            */
        }

 

        return (
            <View styles={styles.reviewContainer}>
                {reviews}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    reviewContainer: {
     flex: 1,
     paddingTop: 30,
     flexDirection: "row",
     borderWidth: 1,
     position: "relative"
    },
    item: {
      padding: 10,
      fontSize: 20,
      height: 44,
    },
  })

export default ReviewList;