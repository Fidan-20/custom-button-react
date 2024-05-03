import "./App.css";
import CustomButton from "./CustomButton";

function App() {
  return (
    <>
      <CustomButton
        text="Click me"
        hint="Hint"
        warnMessage="Warning: Something went wrong!"
      />
    </>
  );
}

export default App;