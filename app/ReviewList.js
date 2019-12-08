import React from "react";
import { Text, View, Button, TextInput, StyleSheet, ScrollView, FlatList } from "react-native";
import { Header } from "react-native-elements";
import console from "console";
import Review from "./Review";

class ReviewList extends React.Component {
    state = {reviewIDs: null}

    componentDidMount() {
        //const { drizzle } = this.props;
        //const contract = drizzle.contracts.protoReviewSystem;

        // let drizzle know we want to watch the `myString` method
        this.props.contract.methods.getReviewIDsFromReviewable(1).call().then((promise) => {
            this.setState({reviewIDs: promise}); 
        }).catch((e) => {
            console.log(e);
        });

        // save the `dataKey` to local component state for later reference
        //this.setState({ reviewIdsKey });
      }
    render() {

        let reviews = [];
        if (this.state.reviewIDs) {
            reviews = this.state.reviewIDs.map((ID) =>
            <Review contract={this.props.contract} web3={this.props.web3} reviewID={parseInt(ID)}></Review>
            );
        } else {
            reviews = <Text>no reviews yet :(</Text>
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