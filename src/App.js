import { useSelector } from "react-redux";
import styled from "styled-components";
import { Controls } from "./components/Controls/Controls";
import { Grid } from "./components/Grid/Grid";
import { Header } from "./components/Header/Header";

const AppContainer = styled.div`
background-image: #EBEEFC;
`;
function App() {
  return (
    <AppContainer>
      <Header />
      <Controls />
      <Grid />
    </AppContainer>
  );
}

export default App;
