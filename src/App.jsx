import { useState } from 'react';
import './App.css'
import Users from './Components/Users';
import UsersForm from './Components/UsersForm';

function App() {

  const users = [
    {
      name: "Kweku",
      email: "kayk@email.com",
      gen: 24
    },
    {
      name: "Jeffery",
      email: "JayJ@email.com",
      gen: 22
    },
    {
      name: "Jesse",
      email: "LJej@email.com",
      gen: 19
    },
  ];

  const [user, setUser] = useState(users);

  const handleAddUser = (newUser) => {
    setUser(prevUsers => [...prevUsers, newUser]);
  }


  return (
    <div className="App">
      <div>
      <UsersForm handleAddUser={handleAddUser} />
      </div>
      <div >
      <Users users={user} />
      </div>
    </div>
  )
}

export default App
