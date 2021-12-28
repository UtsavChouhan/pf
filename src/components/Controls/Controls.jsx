import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { randomMazeGenerator } from "../../helper/helper";
import { resetGrid, setEntry, setExit, setGrid } from "../../redux/general";

const Row = styled.div`
  margin: 10px ;
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Controls = () => {
  const dispatch = useDispatch();
  const {rows, cols} = useSelector(state => state.general);
  const generateMaze = () => {
    const [grid, newEntry, newExit] = randomMazeGenerator(rows, cols);
    // entry.current = newEntry;
    // exit.current = newExit;
    dispatch(setEntry(newEntry));
    dispatch(setExit(newExit));
    dispatch(setGrid(grid));
  }
  const resetMaze = () => {
    dispatch(resetGrid());
  }
  return(
    <Row>
      <Button onClick={() => resetMaze()}>Reset Maze</Button>      
      <Button onClick={() => generateMaze()}>Generate Random Maze</Button>      
    </Row>
  )
}