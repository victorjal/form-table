import './App.css';
import { useState } from 'react';
import UserTable from './UserTable';

function App() {

  const [userList, setUserList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const userData = Object.fromEntries(data);
    console.log(userData);
    setUserList((prevValue) => ([...prevValue, userData]));
    event.target.reset();
  }
  
  console.log(userList);
  return (
    <div className="App">
      <Text title="Create User"/>
      <form onSubmit={handleSubmit} className='form'>        
        <div className="flex">
          <InputLabel title="Full Name" type="text" name="fullName"/>
          <InputLabel title="Username" type="text" name="username"/>
        </div>
        <div className="flex">
          <InputLabel title="Email" type="email" name="email"/>
          <InputLabel title="Password" type="password" name="password"/>
        </div>
        <div>
          <Button title="Submit" className="submitButton"/>
        </div>
      </form>
      <UserTable userList={userList}/>
    </div>
  );
}

function Text(props) {
  return(
    <h1>{props.title}</h1>
  ); 
}

function InputLabel(props) {
  return(
    <div className='inputLabel'>
      <label>{props.title}</label>
      <input type={props.type} name={props.name} className='input'/>
    </div>
  );
}

function Button(props) {
  return(
    <button className={props.className} type='submit'>{props.title}</button>
  )
}

export default App;
