export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// Below is the arrow function that creates the stage for us:
// The stage is a nested array / multi-dimensional array that represents rows and columns: 
// This multi-dimensional array represents the grid
export const createStage = () => 
  Array.from(Array(STAGE_HEIGHT), () => 
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )