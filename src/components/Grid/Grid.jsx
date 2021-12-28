import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { cellGap, cellWidth } from "../../config/config";
import { generateGrid } from "../../helper/helper";
import { setGrid } from "../../redux/general";
import Box from "../Box";

const GridContainer = styled.div`
margin: auto;
display: inline-grid;
grid-template-rows: repeat(${(props) => props.rows}, ${cellWidth}px);
grid-template-columns: repeat(${(props) => props.cols}, ${cellWidth}px);
grid-column-gap: ${cellGap}px;
grid-row-gap: ${cellGap}px;
`;

export const Grid = () => {
  const {rows, cols, grid} = useSelector(state => state.general);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGrid(generateGrid(rows, cols, 0)))
  }, []);

  return(
    <>
      <GridContainer rows = {rows} cols = {cols}>
      {grid && grid.map((row, i) => 
        row.map((cell, j) => <Box key={i + ":" + j} i={i} j={j} clickType={cell} />)
      )}
      </GridContainer>
    </>
  )
}