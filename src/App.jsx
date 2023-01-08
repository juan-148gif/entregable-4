
import './App.css'
import { useState, useEffect } from 'react'
import FormUser from './Components/FormUser'
import { UserCard } from './Components/UserCard'
import useCrud from './hooks/useCrud'

function App() {

 
 const {users,createNewUser,getAllUsers,deleteUserById,updateUserById} = useCrud()
 const [updateInfo, setUpdateInfo] = useState()
 const [closeForm, setCloseForm] = useState(true)

 
  useEffect(() =>{
    getAllUsers()
  }, [])


  return (
    <div className="App">
      <h1>Users</h1>
      <button onClick={() => setCloseForm(false)} className='App_btn'>Open Form</button>

      <div className={`form-container ${closeForm &&'close_form'}`}>
      <FormUser 
      createNewUser={createNewUser}
      updateInfo ={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      setCloseForm={setCloseForm}
        />
      </div>

      <div className='user-container'>
        {
          users?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUserById ={deleteUserById}
            setUpdateInfo = {setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
