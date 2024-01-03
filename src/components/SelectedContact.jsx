import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      const response = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );
      const json = await response.json();
      setContact(json);
      console.log(json);
    }
    fetchContact();
  }, [selectedContactId]);
  return (
    <>
      {contact ? (
        <div className="parent">
          <h1>{contact.name}</h1>
          <div className="body">
            <div>
              <h2>Personal Details: </h2>
              <p>
                <strong>Username:</strong> {contact.username}
              </p>
              <p>
                <strong>Phone: </strong>
                {contact.phone}
              </p>
              <p>
                <strong>Email: </strong>
                {contact.email}
              </p>
              <p>
                <strong>Website:</strong> {contact.website}
              </p>
              <p>
                <strong>Address:</strong>{" "}
                {`${contact.address.street} ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`}
              </p>
            </div>
            <div>
              <h2>Company Details: </h2>
              <p>
                <strong>Name:</strong> {contact.company.name}
              </p>
              <p>
                <strong>Catchphrase:</strong> {contact.company.catchPhrase}
              </p>{" "}
              <p>
                <strong>BS: </strong> {contact.company.bs}
              </p>
            </div>
            <button onClick={() => setSelectedContactId(null)}>
              Go Back to List
            </button>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
