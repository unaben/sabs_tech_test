import React from "react";
import { Button } from "react-bootstrap";

const List = (props) => {
  const {
    handleDelete,
    selectedDetails,
    setSelectedDetails,
    multiFilter,
    contacts,
  } = props;
  return (
    <div className="container">
      <div className="my-3 d-flex  justify-content-between">
        {contacts.length === 0 && (
          <p className="fs-3 fw-bold">No contact to display</p>
        )}
        <input
          type="text"
          id="items"
          className="rounded p-2"
          placeholder="Enter name to filter..."
          value={selectedDetails}
          onChange={(e) => {
            setSelectedDetails(e.target.value);
          }}
        />
      </div>
      <table className="table table-bordered rounded">
        <thead className="table-dark">
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email Address</th>
            <th scope="col"> Phone Number</th>
            <th scope="col">Company Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {multiFilter &&
          multiFilter.map((contact) => (
            <tbody key={contact.id}>
              <tr>
                <th scope="row">{contact.username}</th>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.company.name}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    type="click"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default List;
