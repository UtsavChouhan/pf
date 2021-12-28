import { useSelector } from "react-redux";
import { Controls } from "./components/Controls/Controls";
import { Grid } from "./components/Grid/Grid";

function App() {
  return (
    <div>
      <Controls />
      <Grid />
    </div>
  );
}

export default App;
