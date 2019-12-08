import React from "react";
import { Text, View, Button, TextInput, StyleSheet, ScrollView, FlatList } from "react-native";
import { Header } from "react-native-elements";
import console from "console";

class Review extends React.Component {
    state = {reviewContent: null}

    componentDidMount() {


        // let drizzle know we want to watch the `myString` method
        //const ID = contract.getReviewIDsFromReviewable[reviewIdsKey];

        this.props.contract.methods.getReview(this.props.reviewID).call().then((promise) => {
          this.setState({reviewContent: promise.content});
        })
        // save the `dataKey` to local component state for later reference
      }


    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.item}>{this.state.reviewContent}</Text>
                <View>
                  {/*
                  <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                  /> 
                  <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                    />
                  */}
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