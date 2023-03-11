import ListGroup from "./components/ListGroup";

function App() {
  let items: string[] = [
    "New York",
    "Tokyo",
    "London",
    "Kathmandu",
    "Lalitpur",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
