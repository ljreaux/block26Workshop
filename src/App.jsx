import { useState } from "react";
import ContactList from "./components/ContactList";

import "./App.css";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {!selectedContactId ? (
        <ContactList setSelectedContactId={setSelectedContactId}></ContactList>
      ) : (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}

export default App;
