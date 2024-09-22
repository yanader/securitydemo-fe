import axios from "axios";
import React, {useState, useEffect} from "react";

 const Dashboard = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/user-info', {withCredentials: true})
        .then(response => {
            setUser(response.data)
        })
    }, [])

    return (
        <div>
            <h2>DASHBOARD</h2>
            {user ? (
                <div>
                    <p><strong>Name: {user.name}</strong></p>
                    <p><strong>Email: {user.email}</strong></p>
                </div>
            ) : (<p>Loading user data....</p>)}
        </div>
    ) ;
 };

 export default Dashboard;