import React, { useState } from 'react';
import Card from '../../UI/Card';
import Classes from './userform.module.css';
import Button from '../../UI/Button';
import ErrorMessagBox from '../../UI/ErrorMessageBox';

const UserForm = (props) => {
  const [error, setError] = useState({});
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const userNameReciever = (event) => {
    setUserName(event.target.value);
  };

  const userAgeReciever = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Error',
        description: 'Enter valid input',
      });
    } else if (userAge.trim().length < 0) {
      setError({
        title: 'Error',
        description: 'Enter valid age',
      });
    } else {
      props.inputReciever(userName, userAge);
      setUserName('');
      setUserAge('');
      setError(null);
    }
  };

  const clickHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorMessagBox
          title={error.title}
          description={error.description}
          onClicked={clickHandler}
        />
      )}
      <Card className={Classes.input}>
        <div>
          <form onSubmit={submitHandler}>
            <label htmlFor="user-name">User Name</label>
            <input type="text" id="user-name" onChange={userNameReciever} value={userName} />
            <label htmlFor="user-age">User Age</label>
            <input type="text" id="user-age" onChange={userAgeReciever} value={userAge} />
            <Button type="submit" name="submit" />
          </form>
        </div>
      </Card>
    </div>
  );
};

export default UserForm;
