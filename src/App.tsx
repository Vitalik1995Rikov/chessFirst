import React, { useEffect, useState } from "react";

import { Board } from "./models/Board";
import BoardComponent from "./components/BoardComponents";

const App = () => {

    const [board, setBoard] = useState(new Board());

    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        setBoard(newBoard);
    }

    return (
        <BoardComponent/>
    )
}

export default App;