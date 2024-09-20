import React, {useState} from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [jwt, setJwt] = useState("");
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/signin", {
                method:"POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password}),
            }
            );

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setJwt(data.token)
                setMessage("Login Successful");
            } else {
                setMessage("Login Failed. Please check credentials");
            }

        } catch (error) {
            console.log("Error: " + error);
            setMessage("An error occured. Please try again")
        }
    }

    return (
        <div>
            <h2>Login</h2>
        </div>
    );

}

export default Login;