import React , { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [UserList , setUsersList] = useState([])

  const addUserHandler = (uName , uAge) => {
    setUsersList((prevUsersList) => {
        return [...prevUsersList , {name : uName , age : uAge , id : Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={UserList}/>
    </div>
  );
}

export default App;
