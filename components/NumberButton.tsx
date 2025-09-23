import { StyleSheet, Text } from "react-native";
import TouchableScale from "./TouchableScale";

interface NumberButtonProps {
    number: number;
    onClick?: () => void;
}

export default function NumberButton({number, onClick}: NumberButtonProps) {
    return (
        <TouchableScale style={styles.container} onPressIn={onClick}>
            <Text style={styles.number}>{number}</Text>
        </TouchableScale>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 54,
        width: 54,
        borderColor: "#DDD",
        borderWidth: 1,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center"
    },
    number: {
        fontSize: 32
    }
})
