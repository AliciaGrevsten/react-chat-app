import React, { useState, useEffect } from 'react';
import User from './User';
import { fetchUsers } from '../api/user.api';


const UserList = props => {

    const [ users, setUsers ] = useState([]);
    const [ isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers  = async () => {
        let result;

        try {
            result = await fetchUsers();
            setUsers([...result.data]);
            setIsLoaded(true);
        } catch (e) {

        } finally {

        }
    }

    return (
        <div className="userlist">
            <div>
                <h5>Users</h5>
                <br></br>
                {
                    isLoaded && 
                    users.map(user =>
                        <User user={user} key={user.id} />
                    )
                }
            </div>
        </div>
    );
}

export default UserList;