import Container from "../components/Container";
import Form from "../components/Form";
import UserList from "../components/UserList";
import { useState } from "react";

export default function Home(props) {
  const [listed, setListed] = useState();

  const saveListHandler = (enteredList) => {
    const list = {
      ...enteredList,
    };

    setListed(list);
  };

  console.log(listed);

  return (
    <div className="d-flex justify-content-center">
      <Form onSaveList={saveListHandler} />
      <UserList list={saveListHandler.list} />
    </div>
  );
}
