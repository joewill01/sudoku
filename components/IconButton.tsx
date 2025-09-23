import { StyleSheet, Text } from "react-native";
import { SvgProps } from 'react-native-svg';
import TouchableScale from "./TouchableScale";

interface IconButtonProps {
    children?: string;
    icon: React.FC<SvgProps>;
    onClick?: () => void;
}

export default function IconButton({children, icon: Icon, onClick}: IconButtonProps) {
    return (
        <TouchableScale style={styles.container} onPressIn={onClick}>
            <>
                <Icon style={styles.icon} />
                <Text style={styles.text}>{children}</Text>
            </>
        </TouchableScale>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 38,
        width: 96,
        borderColor: "#DDD",
        borderWidth: 1,
        borderRadius: 7,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 28,
    },
    icon: {
        position: "absolute",
        left: 12
    },
    text: {
        fontSize: 14,
        color: "#474747"
    }
})
