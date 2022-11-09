import "./styles.css";
import NumberPad from "./NumberPad";

export default function App() {
  return (
    <div className="App" style={{ backgroundColor: "#151515" }}>
      <h1 className="Number" style={{ color: "white" }}>
        {" "}
        Calculator{" "}
      </h1>
      <NumberPad />
    </div>
  );
}
