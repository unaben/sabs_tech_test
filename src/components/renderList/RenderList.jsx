import React, { useEffect, useState } from "react";
import List from "../../components/list/List";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getContacts } from "../../features/contactSlice";
import { allContacts } from "../../features/contactSlice";
import useFilter from "../../Hooks/useFilter";
import { deleteContact } from "../../features/contactSlice";

const RenderList = () => {
  const dispatch = useDispatch();
  // const initialState = useSelector((state) => state.contact.contacts)
  const contacts = useSelector(allContacts);
  const [selectedDetails, setSelectedDetails] = useState("");
  const [multiFilter] = useFilter(contacts, selectedDetails);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact({ id: id }));
  };

  return (
    <>
      <List
        contacts={contacts}
        multiFilter={multiFilter}
        handleDelete={handleDelete}
        selectedDetails={selectedDetails}
        setSelectedDetails={setSelectedDetails}
      />
    </>
  );
};

export default RenderList;
