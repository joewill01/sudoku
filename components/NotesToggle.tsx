import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import TouchableScale from "./TouchableScale";

interface NotesToggleProps {
    isNotesMode: boolean;
    onClick?: () => void;
}

export default function NotesToggle({onClick, isNotesMode}: NotesToggleProps) {
    useEffect(() => {
        progress.value = withTiming(isNotesMode ? 1 : 0, { duration: 200 });
    }, [isNotesMode,])

    const progress = useSharedValue(0);

    const animatedToggleStyle = useAnimatedStyle(() => {
        const translateX = interpolate(
          progress.value,
          [0, 1],
          [0, 68],
          Extrapolate.CLAMP
        );
        return {
          transform: [{ translateX }],
        };
    });

    const notesTextStyle = useAnimatedStyle(() => {
        const color = interpolateColor(progress.value, [0, 1], ['#000', '#fff']);
        return { color };
    });
    
    const digitTextStyle = useAnimatedStyle(() => {
        const color = interpolateColor(progress.value, [0, 1], ['#fff', '#000']);
        return { color };
    });
    
    return (
        <TouchableScale style={styles.container} onPress={onClick}>
            <Animated.View style={[styles.toggle, animatedToggleStyle]} />
            
            <Animated.Text style={[styles.text, digitTextStyle]}>
                digit
            </Animated.Text>

            <Animated.Text style={[styles.text, notesTextStyle]}>
                notes
            </Animated.Text>
        </TouchableScale>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 32,
        width: 140,
        borderColor: "#DDD",
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",


        marginTop: 20

    },
    toggle: {
        position: "absolute",
        top: 1,
        left: 1,
        height: 28,
        width: 68,
        backgroundColor: "#000",
        borderRadius: 10
    },
    text: {
        zIndex: 1,
        fontWeight: "500",
        width: 50,
        textAlign: "center"
    },
    activeText: {
        color: "#fff"
    },
    inactiveText: {
        color: "#000"
    }
})
