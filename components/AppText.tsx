import { StyleSheet, Text } from "react-native";

type AppTextProps = {
    children: React.ReactNode,
    style: {}
}

export default function AppText({ style, children }: AppTextProps) {
    return (
        <Text style={[style, styles.text]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "InclusiveSans_400Regular"
    }
});