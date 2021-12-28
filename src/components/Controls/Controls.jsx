import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { randomMazeGenerator } from "../../helper/helper";
import { resetGrid, setEntry, setExit, setGrid } from "../../redux/general";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from "react";
import Box from "../Box";
import { entryType, exitType, pathType, searchType, wallType } from "../../config/config";

const ControlsContainer = styled.div`
  background-color: #EBEEFC;
`;

const Row = styled.div`
  // margin: 10px;
  background-color: #EBEEFC;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const NodeContainer = styled.div`
grid-template-rows: 20px;
padding: 0.4em 2em 1.4em 2em;
color: #5F6366;
grid-template-cols: 20px;
display: inline-flex;
& > div {
  width: 20px;
}
`;

const AlgoDescription = styled.div`
  margin: 10px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
color: #5F6366;
font-size: 1em;

  // align-items: center;
`;

const Button = styled.button`
background-color: #EBEEFC;
color: #5F6366;
  font-size: 1em;
  margin: 1em;
  padding: 0.45em 1.2em;
  border: 2px solid #5F6366;
  border-radius: 3px;
  transition: 0.5s;
  &:hover{
    color: #EBEEFC;
    background-color: #5F6366;
  }
`;
const Element = styled("div")`
// margin-bottom: 0.8em;
padding: 0.4em 2em 1.4em 2em;
// box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
font-weight: 500;
display: flex;
font-size: 1rem;
color: #5F6366;
// background: #ffffff;
&:hover{
  color: #8860D0;
}
display: inline-grid;
cursor: pointer;
`;
const DropDownContainer = styled("div")`
  // width: 10.5em;
  display: inline-grid;
  // margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  // margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  // box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  display: flex;
  font-size: 1rem;
  color: #5F6366;
  // background: #ffffff;
  cursor: pointer;
  &:hover{
    color: #8860D0;
  }
`;

const DropDownListContainer = styled("div")`
position: absolute;
min-width: 100px;
margin-left: 15px;
margin-top: 30px;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  padding-right: 5px;
  font-size: 1rem;
  color: #5F6366;
  cursor: pointer;
  &:hover{
    color: #8860D0;
  }

`;

const AlgoMap = new Map([
[1, "Dijkstra's Algorithm"],
[2, "A* Search"],
[3, "Greedy Best-first Search"],
[4, "Swarm Algorithm"],
[5, "Convergent Swarm Algorithm"],
[6, "Bidirectional Swarm Algorithm"],
[7, "Breadth-first Search"],
[8, "Depth-first Search"],
[9, ""]
])

export const Controls = () => {
  const [openDrawer, setOpenDrawer] = useState(null);
  const [algorithm, setAlgorithm] = useState(9);
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
    <ControlsContainer>
    <Row>
    <DropDownContainer>
      <DropDownHeader onClick={() => {
        if(openDrawer === 1) setOpenDrawer(null);
        else setOpenDrawer(1);
      }}>
        Algorithms
        {openDrawer !== 1 ? <FaAngleDown style={{paddingTop: '3px'}}/> : <FaAngleUp style={{paddingTop: '3px'}}/>}
      </DropDownHeader>
      {openDrawer === 1 && <DropDownListContainer>
        <DropDownList>
          <ListItem onClick={() => {
            setAlgorithm(1);
            setOpenDrawer(null);
          }}>Dijkstra's Algorithm</ListItem>
          <ListItem onClick={() => {
            setAlgorithm(2);
            setOpenDrawer(null);
          }}>A* Search</ListItem>
          <ListItem onClick={() => {
            setAlgorithm(3);
            setOpenDrawer(null);
          }}>Greedy Best-first Search</ListItem>
          <ListItem onClick={() => {
            setAlgorithm(4);
            setOpenDrawer(null);
          }}>Swarm Algorithm</ListItem>
          <ListItem onClick={() => {
            setAlgorithm(5);
            setOpenDrawer(null);
          }}>Convergent Swarm Algorithm</ListItem>
          <ListItem onClick={() => {
            setAlgorithm(6);
            setOpenDrawer(null);
          }}>Bidirectional Swarm Algorithm</ListItem>
          <ListItem onClick={() => {
            setAlgorithm(7);
            setOpenDrawer(null);
          }}>Breadth-first Search</ListItem>
          <ListItem onClick={() => {
            setAlgorithm(8);
            setOpenDrawer(null);
          }}>Depth-first Search</ListItem>
        </DropDownList>
      </DropDownListContainer>}
    </DropDownContainer>
      <DropDownContainer>
        <DropDownHeader onClick={() => {
        if(openDrawer === 2) setOpenDrawer(null);
        else setOpenDrawer(2);
        }}>
          {'Mazes & Patterns'}
          {openDrawer !== 2 ? <FaAngleDown style={{paddingTop: '3px'}}/> : <FaAngleUp style={{paddingTop: '3px'}}/>}

        </DropDownHeader>
        {openDrawer === 2 && <DropDownListContainer>
          <DropDownList>
            <ListItem>Recursive Division</ListItem>
            <ListItem>Recursive Division (vertical skew)</ListItem>
            <ListItem>Recursive Division (horizontal skew)</ListItem>
            <ListItem>Basic Random Maze</ListItem>
            <ListItem>Basic Weight Maze</ListItem>
            <ListItem>Simple Stair Pattern</ListItem>
          </DropDownList>
        </DropDownListContainer>}
      </DropDownContainer>
      <Button onClick={() => alert('yo')}>{`Visualize ${AlgoMap.get(algorithm)}`}</Button>  
      <Element onClick={() => resetMaze()}>
        Reset Maze
      </Element>   
      <Element onClick={() => generateMaze()}>
      Generate Random Maze
      </Element>
      <DropDownContainer>
        <DropDownHeader onClick={() => {
        if(openDrawer === 3) setOpenDrawer(null);
        else setOpenDrawer(3);
        }}>
          {`Speed: Fast`}
          {openDrawer !== 3 ? <FaAngleDown style={{paddingTop: '3px'}}/> : <FaAngleUp style={{paddingTop: '3px'}}/>}
        </DropDownHeader>
        {openDrawer === 3 && <DropDownListContainer>
          <DropDownList>
            <ListItem>Fast</ListItem>
            <ListItem>Average</ListItem>
            <ListItem>Slow</ListItem>
          </DropDownList>
        </DropDownListContainer>}
      </DropDownContainer>
    </Row>
    <Row>
      <NodeContainer>
        <Box clickType={wallType}/>
        &nbsp;&nbsp;Wall Node
      </NodeContainer>
      <NodeContainer>
        <Box clickType={entryType}/>
        &nbsp;&nbsp;Start Node
      </NodeContainer>
      <NodeContainer>
        <Box clickType={exitType}/>
        &nbsp;&nbsp;Target Node
      </NodeContainer>
      <NodeContainer>
        <Box clickType={searchType}/>
        &nbsp;&nbsp;Visited Node
      </NodeContainer>
      <NodeContainer>
        <Box clickType={pathType}/>
        &nbsp;&nbsp;Shortest-path Node
      </NodeContainer>
    </Row>
    <AlgoDescription>
      Depth-first Search is unweighted and does not guarantee the shortest path!
    </AlgoDescription>
    </ControlsContainer>
  )
}