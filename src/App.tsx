import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Clicked")}></Like>
    </div>
  );
}

export default App;
