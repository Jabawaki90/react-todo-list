import { useState, useEffect } from "react";

const UserList = (props) => {
  console.log('userlist: ')
  console.log(props.list)
  
  return <div>{props.list.map((e)=>{
    return <h1 key={e.id}>{e.username}</h1>
  })}</div>;
};

export default UserList;
