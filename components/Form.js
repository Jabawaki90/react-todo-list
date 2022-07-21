import { useState } from "react";

const Form = (props) => {
  const [username, setUsername] = useState(null);
  const [age, setAge] = useState(null);
  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== null && age !== null) {
      setUserList([...userList, {
        username: username,
        age: age,
        id: Math.random().toString(),
      }])
    }
    setUsername(null);
    setAge(null);
  };

  props.onSaveList(userList);

  return (
    <form
      className="d-inline-flex flex-column justify-content-center"
      onSubmit={handleSubmit}
    >
      <label className="m-2" htmlFor="username">
        Username
      </label>
      <input
        id="username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="m-2" htmlFor="age">
        Age (Years)
      </label>
      <input id="age" type="number" onChange={(e) => setAge(e.target.value)} />
      <button className="btn btn-primary m-2" type="submit">
        Add User
      </button>
    </form>
  );
};

export default Form;
