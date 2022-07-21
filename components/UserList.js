import { useState, useEffect } from "react";

const UserList = (props) => {
  return (
    <div className="d-inline-flex flex-column justify-content-center">
      {props.list
        ? props.list.map((e) => {
            return (
              <h1 className="d-flex justify-content-center" key={e.id}>
                {e.username}
              </h1>
            );
          })
        : null}
    </div>
  );
};

export default UserList;
