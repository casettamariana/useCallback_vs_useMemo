import "./styles.css";
import * as React from "react";

const Button = ({ ...props }) => {
  React.useEffect(() => {
    console.log("BUTTON: RE-RENDER");
  });

  React.useEffect(() => {
    console.log("BUTTON: ON CLICK CHANCKGED");
  }, [props.onClick]);

  return <button {...props} />;
};

export default function UseCallback() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("APP: RE-RENDER");
  }, [count]);

  return (
    <div className="App">
      <h2>useCallback</h2>
      <div>Count: {count}</div>
      <Button
        onClick={React.useCallback(() => setCount((prev) => prev + 1), [])}
      >
        Increment
      </Button>
    </div>
  );
}
