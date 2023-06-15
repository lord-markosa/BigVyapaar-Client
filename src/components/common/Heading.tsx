import {
    StyleSheet,
    Text,
    View,
    StyleProp,
    TextStyle,
    ViewStyle,
} from "react-native";

interface HeadingProps {
    label: string;
    labelStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}

export default function Heading(props: HeadingProps) {
    return (
        <View style={[styles.root, props.containerStyle]}>
            <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        marginVertical: 16,
    },
    label: {
        fontFamily: "MerriweatherRegular",
        fontSize: 36,
    },
});
