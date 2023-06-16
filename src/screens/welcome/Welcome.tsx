import React from "react";
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
import Button from "../../components/common/Button";
import Heading from "../../components/common/Heading";
import { WelcomeScreenNavigationProp } from "../../schema/ReactNavigation";

interface WelcomeNavigationProps {
    navigation: WelcomeScreenNavigationProp;
}

export default function Welcome(props: WelcomeNavigationProps) {
    const goToLoginPage = (evt: GestureResponderEvent) => {
        evt.stopPropagation();
        props.navigation.navigate("Login");
    };
    return (
        <View style={styles.root}>
            <View style={styles.headingContainer}>
                <Heading
                    label="Bid Ask 'n' Trade"
                    labelStyle={styles.headingLabel}
                />
            </View>
            <Text style={styles.sloganLabel}>
                Elevating business needs, {"\n"} one trade at a time.
            </Text>
            <Button
                onPress={goToLoginPage}
                label="Get started..."
                containerStyle={styles.button}
                labelStyle={styles.buttonLabel}
                androidRippleColor={"#A9A9A9"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    headingLabel: {
        fontFamily: "Lobster",
        color: "white",
        fontSize: 48,
    },
    headingContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    titleImage: {
        height: 60,
        width: 280,
        resizeMode: "stretch",
    },
    sloganLabel: {
        fontFamily: "MerriweatherLightItalic",
        color: "white",
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 60,
        marginHorizontal: 40,
    },
    button: {
        backgroundColor: "#606060",
        borderRadius: 8,
        margin: 40,
    },
    buttonLabel: {
        fontSize: 20,
        color: "white",
    },
});
