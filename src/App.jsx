import "./App.css";
import MapViewer from "./components/MapViewer";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <MapViewer>
        <Test />
        <Test />
        <Test />
      </MapViewer>
    </div>
  );
}

export default App;
