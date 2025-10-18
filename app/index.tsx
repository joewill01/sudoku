import EraseIcon from "@/assets/icons/erase.svg";
import UndoIcon from "@/assets/icons/undo.svg";
import AppText from "@/components/AppText";
import Board from "@/components/Board/Board";
import IconButton from "@/components/IconButton";
import NotesToggle from "@/components/NotesToggle";
import NumberButton from "@/components/NumberButton";
import { InclusiveSans_400Regular } from '@expo-google-fonts/inclusive-sans/400Regular';
import { useFonts } from '@expo-google-fonts/inclusive-sans/useFonts';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { StyleSheet, View } from "react-native";



type Cell = {
    id: number;
    digit: number;
    fixed: boolean;
    notes: number[];
};


function setCellDigit(grid: Cell[][], setGrid: (grid: Cell[][]) => void, cellId: number, digit: number) {
    const newGrid = grid.map(row =>
        row.map(cell => {
            if (cell.id === cellId && !cell.fixed) {
                return { ...cell, digit, notes: [] };
            }
            return cell;
        })
    );
    setGrid(newGrid);
}


function toggleCellNote(grid: Cell[][], setGrid: (grid: Cell[][]) => void, cellId: number, note: number) {
    const newGrid = grid.map(row =>
        row.map(cell => {
            if (cell.id === cellId && !cell.fixed && cell.digit === 0) {
                const notes = cell.notes.includes(note)
                    ? cell.notes.filter(n => n !== note)
                    : [...cell.notes, note].sort();

                return { ...cell, notes };
            }
            return cell;
        })
    );
    setGrid(newGrid);
}


export default function index() {
    let [fontsLoaded] = useFonts({
        InclusiveSans_400Regular
    })
    
    function handleNumberClick(number: number) {
        if (isNotesMode) {
            toggleCellNote(grid, setGrid, selectedCellId, number);
        } else {
            setCellDigit(grid, setGrid, selectedCellId, number);
        }
    }
    
    const [grid, setGrid] = useState<Cell[][]>(
        [
            [
                {id: 0, digit: 0, fixed: false, notes: []},
                {id: 1, digit: 0, fixed: false, notes: []},
                {id: 2, digit: 0, fixed: false, notes: []},
                {id: 3, digit: 0, fixed: false, notes: []},
                {id: 4, digit: 0, fixed: false, notes: []},
                {id: 5, digit: 6, fixed: true, notes: []},
                {id: 6, digit: 0, fixed: false, notes: []},
                {id: 7, digit: 0, fixed: false, notes: []},
                {id: 8, digit: 8, fixed: true, notes: []}
            ],
            [
                {id: 9, digit: 0, fixed: false, notes: []},
                {id: 10, digit: 0, fixed: false, notes: []},
                {id: 11, digit: 0, fixed: false, notes: []},
                {id: 12, digit: 0, fixed: false, notes: []},
                {id: 13, digit: 0, fixed: false, notes: []},
                {id: 14, digit: 0, fixed: false, notes: []},
                {id: 15, digit: 2, fixed: true, notes: []},
                {id: 16, digit: 0, fixed: false, notes: []},
                {id: 17, digit: 9, fixed: true, notes: []}
            ],
            [
                {id: 18, digit: 0, fixed: false, notes: []},
                {id: 19, digit: 9, fixed: true, notes: []},
                {id: 20, digit: 0, fixed: false, notes: []},
                {id: 21, digit: 0, fixed: false, notes: []},
                {id: 22, digit: 8, fixed: true, notes: []},
                {id: 23, digit: 2, fixed: true, notes: []},
                {id: 24, digit: 0, fixed: false, notes: []},
                {id: 25, digit: 6, fixed: true, notes: []},
                {id: 26, digit: 4, fixed: true, notes: []}
            ],
            [
                {id: 27, digit: 0, fixed: false, notes: []},
                {id: 28, digit: 0, fixed: false, notes: []},
                {id: 29, digit: 9, fixed: true, notes: []},
                {id: 30, digit: 0, fixed: false, notes: []},
                {id: 31, digit: 0, fixed: false, notes: []},
                {id: 32, digit: 0, fixed: false, notes: []},
                {id: 33, digit: 0, fixed: false, notes: []},
                {id: 34, digit: 0, fixed: false, notes: []},
                {id: 35, digit: 0, fixed: false, notes: []}
            ],
            [
                {id: 36, digit: 1, fixed: true, notes: []},
                {id: 37, digit: 2, fixed: true, notes: []},
                {id: 38, digit: 4, fixed: true, notes: []},
                {id: 39, digit: 0, fixed: false, notes: []},
                {id: 40, digit: 0, fixed: false, notes: []},
                {id: 41, digit: 0, fixed: false, notes: []},
                {id: 42, digit: 0, fixed: false, notes: []},
                {id: 43, digit: 5, fixed: true, notes: []},
                {id: 44, digit: 0, fixed: false, notes: []}
            ],
            [
                {id: 45, digit: 0, fixed: false, notes: []},
                {id: 46, digit: 5, fixed: true, notes: []},
                {id: 47, digit: 0, fixed: false, notes: []},
                {id: 48, digit: 0, fixed: false, notes: []},
                {id: 49, digit: 0, fixed: false, notes: []},
                {id: 50, digit: 4, fixed: true, notes: []},
                {id: 51, digit: 0, fixed: false, notes: []},
                {id: 52, digit: 0, fixed: false, notes: []},
                {id: 53, digit: 0, fixed: false, notes: []}
            ],
            [
                {id: 54, digit: 0, fixed: false, notes: []},
                {id: 55, digit: 0, fixed: false, notes: []},
                {id: 56, digit: 0, fixed: false, notes: []},
                {id: 57, digit: 0, fixed: false, notes: []},
                {id: 58, digit: 0, fixed: false, notes: []},
                {id: 59, digit: 9, fixed: true, notes: []},
                {id: 60, digit: 1, fixed: true, notes: []},
                {id: 61, digit: 7, fixed: true, notes: []},
                {id: 62, digit: 5, fixed: true, notes: []}
            ],
            [
                {id: 63, digit: 7, fixed: true, notes: []},
                {id: 64, digit: 0, fixed: false, notes: []},
                {id: 65, digit: 0, fixed: false, notes: []},
                {id: 66, digit: 0, fixed: false, notes: []},
                {id: 67, digit: 2, fixed: true, notes: []},
                {id: 68, digit: 5, fixed: true, notes: []},
                {id: 69, digit: 9, fixed: true, notes: []},
                {id: 70, digit: 0, fixed: false, notes: []},
                {id: 71, digit: 0, fixed: false, notes: []}
            ],
            [
                {id: 72, digit: 0, fixed: false, notes: []},
                {id: 73, digit: 1, fixed: true, notes: []},
                {id: 74, digit: 0, fixed: false, notes: []},
                {id: 75, digit: 0, fixed: false, notes: []},
                {id: 76, digit: 7, fixed: true, notes: []},
                {id: 77, digit: 0, fixed: false, notes: []},
                {id: 78, digit: 6, fixed: true, notes: []},
                {id: 79, digit: 0, fixed: false, notes: []},
                {id: 80, digit: 0, fixed: false, notes: []}
            ]
        ]
    );
    const [selectedCellId, setSelectedCellId] = useState(-1);
    const [isNotesMode, setIsNotesMode] = useState(false);


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#CCE1E1', '#B6CEE6']}
                style={styles.background}
            />

            <View style={styles.headerContainer}>
                <AppText style={styles.timer}>01:40</AppText>
                <AppText style={styles.difficulty}>medium</AppText>
            </View>

            <View style={styles.gameContainer}>
                <Board grid={grid} selectedCell={selectedCellId} onCellPress={(cell: Cell) => {setSelectedCellId(cell.id)}}/>
                

                <View style={styles.controlsContainer}>
                    <View style={styles.iconButtonContainer}>
                        <IconButton icon={EraseIcon} onClick={() => {setCellDigit(grid, setGrid, selectedCellId, 0)}}>erase</IconButton>
                        <IconButton icon={UndoIcon} onClick={() => {setCellDigit(grid, setGrid, selectedCellId, 0)}}>undo</IconButton>
                    </View>

                    <View style={styles.numberButtonContainer}>
                        <View style={styles.numberButtonRow}>
                            <NumberButton number={1} onClick={() => {handleNumberClick(1)}} />
                            <NumberButton number={2} onClick={() => {handleNumberClick(2)}} />
                            <NumberButton number={3} onClick={() => {handleNumberClick(3)}} />
                            <NumberButton number={4} onClick={() => {handleNumberClick(4)}} />
                            <NumberButton number={5} onClick={() => {handleNumberClick(5)}} />
                        </View>
                        <View style={styles.numberButtonRow}>
                            <NumberButton number={6} onClick={() => {handleNumberClick(6)}} />
                            <NumberButton number={7} onClick={() => {handleNumberClick(7)}} />
                            <NumberButton number={8} onClick={() => {handleNumberClick(8)}} />
                            <NumberButton number={9} onClick={() => {handleNumberClick(9)}} />
                        </View>

                        <NotesToggle isNotesMode={isNotesMode} onClick={() => setIsNotesMode(!isNotesMode)} />
                    </View>
                 </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    background: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        height: 185
    },

    headerContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        height: 160,
        zIndex: 2
    },

    timer: {
        position: "absolute",
        bottom: 34,
        left: 24,
        fontSize: 32,
    },

    difficulty: {
        position: "absolute",
        bottom: 16,
        left: 24,
        fontSize: 16,
        color: "#787878",
    },

    gameContainer: {
        position: "absolute",
        top: 160,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: "center",
        paddingTop: 22
    },

    controlsContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 40
    },

    numberButtonContainer: {
        alignItems: "center",
        gap: 10
    },
    numberButtonRow: {
        flexDirection: "row",
        gap: 10
    },

    iconButtonContainer: {
        position: "absolute",
        top: 20,
        flexDirection: "row",
        gap: 24
    }
})