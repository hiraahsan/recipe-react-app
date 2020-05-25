import React, { useState, useContext} from 'react';
import Login from './Login';
import UserContext from './UserContext';

const LoginPage = (props) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const userSetup = (assignUser, email, name) => {
        setUser(assignUser)
        setEmail(email)
        setName(name)
    }


    return(
        <>
        <UserContext.Provider value={user}>
            {user 
            ?
            <p>Welcome!</p>
            :
            <Login userSetup = {userSetup}/>}
            </UserContext.Provider>
                </>
        )
}

export default LoginPage;