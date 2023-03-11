import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")} color="secondary">
        My Button
      </Button>
    </div>
  );
}

export default App;
