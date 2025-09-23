import { StyleSheet, View } from "react-native";
import Cell from "./Cell";

export default function Board(props) {
    return (
        <View style={styles.container}>
            {props.grid.map((row: [], rowIndex: number) => {
                    return (
                        <>
                            <View style={styles.row} key={rowIndex}>
                                {row.map((cell: {id: number, digit: number, fixed: boolean, notes: []}, colIndex: number) => {
                                    return (
                                        <>
                                            <Cell
                                                digit={cell.digit}
                                                notes={cell.notes}
                                                selected={props.selectedCell == cell.id}
                                                highlighted={getCellById(props.grid, props.selectedCell)?.digit
                                                                ? getCellById(props.grid, props.selectedCell).digit === cell.digit
                                                                : false}
                                                onClick={() => {props.onCellPress(cell)}}
                                                />

                                            {[0, 1, 3, 4, 6, 7].includes(colIndex)?<View style={styles.verticalLine} key={`${rowIndex},${colIndex}_spacer`} />:<></>}
                                            {[2, 5].includes(colIndex)?<View style={styles.verticalLineThick} key={`${rowIndex},${colIndex}_spacer`} />:<></>}
                                        </>
                                    )
                                })}
                            </View>
                            {[0, 1, 3, 4, 6, 7].includes(rowIndex)?<View style={styles.horizontalLine} key={`${rowIndex}_spacer`} />:<></>}
                            {[2, 5].includes(rowIndex)?<View style={styles.horizontalLineThick} key={`${rowIndex}_spacer`} />:<></>}
                        </>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 400,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 12,
        overflow: "hidden"
    },

    row: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    horizontalLine: {
        width: "100%",
        height: 1,
        backgroundColor: "#D6D6D6",
        zIndex: 1
    },

    horizontalLineThick: {
        width: "100%",
        height: 2,
        backgroundColor: "#ADADAD"
    },

    verticalLine: {
        width: 1,
        height: "100%",
        backgroundColor: "#D6D6D6",
        zIndex: 5
    },

    verticalLineThick: {
        width: 2,
        height: "100%",
        backgroundColor: "#ADADAD",
        zIndex: 5
    },
})

function getCellById(grid, id) {
    const row = Math.floor(id / 9);
    const col = id % 9;

    const cell = grid[row]?.[col];
    if (!cell) {
        return
    }

    return cell;
}
