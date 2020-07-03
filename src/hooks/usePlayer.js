import { useState } from 'react';

import { randomTetromino } from '../tetrominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: randomTetromino().shape,
        collided: false,
    });
    // const [player, setPlayer] = useState()
    // the line above is achieving the same thing as the three lines below together.
    // const playerState = useState();
    // const player = playerState[0]
    // const setPlayer = playerState[1]
    
    return [player];
}