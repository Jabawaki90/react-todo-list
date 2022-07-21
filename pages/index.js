import Form from "../components/Form";
import UserList from "../components/UserList";
import { useState } from "react";

export default function Home(props) {
  const [listed, setListed] = useState();

  const saveListHandler = (enteredList) => {
    const list = {
      ...enteredList,
    };
    setListed(enteredList);
  };
  console.log("index: ");
  console.log(listed);

  return (
    <div className="d-flex p-4 flex-column justify-content-center">
      <Form onSaveList={saveListHandler} />
      <UserList list={listed} />
    </div>
  );
}
