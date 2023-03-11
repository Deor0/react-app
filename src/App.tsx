import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibilty] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibilty(false);
          }}
        >
          My Alert
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibilty(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
