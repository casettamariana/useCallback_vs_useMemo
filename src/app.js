import "./styles.css";
import * as React from "react";

import UseCallback from "./useCallback";
import UseMemo from "./useMemo";

export default function App() {
  return (
    <div className="App">
      <h1>useCallback vs useMemo</h1>
      <UseCallback />
      <UseMemo />
    </div>
  );
}
