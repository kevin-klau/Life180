import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Menu />
    </div>
  );
}

export default App;
