import React from 'react';
import { StyledCell } from './styles/StyledCell';
import {TETROMINOS} from '../tetrominos';

const Cell = ({ type }) => (
    // Pulling the color from the TETROMINS object
    <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default Cell; 