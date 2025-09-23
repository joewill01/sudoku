import { Pressable, StyleSheet, Text, View } from "react-native";

interface CellProps {
	digit: number;
    notes?: [];
    selected?: boolean;
    highlighted?: boolean;
    correct?: boolean;
    incorrect?: boolean;
    onClick?: () => void;
}

export default function Cell({digit, notes, selected, highlighted, correct, incorrect, onClick}: CellProps) {
    return (
        <Pressable style={[styles.container, highlighted?{backgroundColor: "#eee"}:[], selected?{backgroundColor: "#C8DEE4"}:[]]} onPressIn={onClick}>
            <Text style={styles.digitText}>{digit?digit:""}</Text>

            <View style={styles.notesContainer}>
                {notes?.map((note) => {
                    return <Text style={[styles.note, styles[`note_${note}`]]}>{note}</Text>
                })}
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    digitText: {
        fontSize: 28,
    },

    notesContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
    },

    note: {
        color: "#8B8B8B",
        fontSize: 12,
        width: "33%",
        height: "33%",
        textAlign: "center"
    },

    note_1: {
        position: "absolute",
        top: 0,
        left: 0
    },
    note_2: {
        position: "absolute",
        top: 0,
    },
    note_3: {
        position: "absolute",
        top: 0,
        right: 0
    },
    note_4: {
        position: "absolute",
        left: 0
    },
    note_5: {

    },
    note_6: {
        position:"absolute",
        right: 0
    },
    note_7: {
        position: "absolute",
        bottom: 0,
        left: 0
    },
    note_8: {
        position: "absolute",
        bottom: 0,
    },
    note_9: {
        position: "absolute",
        bottom: 0,
        right: 0
    },
})