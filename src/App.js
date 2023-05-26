
import React, { useState } from 'react';
import UserForm from './Components/userComponents/Userform';
import UserListDisplay from './Components/userComponents/UserListDisplayer';
function App() {
  const [userList,setUserList]=useState([])
  const userInputAdder=(uName,uAge)=>{
        setUserList((prevArray)=>{
          return [...prevArray,{name:uName,age:uAge,id:Math.random().toString()}]
        })
  }
  return (
    <div>
      <UserForm inputReciever={userInputAdder}/>
      <UserListDisplay users={userList} />
    </div>
  );
}

export default App;
