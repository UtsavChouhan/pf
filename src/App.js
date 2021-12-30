import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Controls } from "./components/Controls/Controls";
import { Grid } from "./components/Grid/Grid";
import { Header } from "./components/Header/Header";

const AppContainer = styled.div`
background-image: #EBEEFC;
`;
function App() {
  const [grid, setGrid] = useState(null);
  return (
    <AppContainer>
      <Header />
      <Controls grid={grid} updateGrid={setGrid} />
      <Grid grid={grid} updateGrid={setGrid} />
    </AppContainer>
  );
}

export default App;
