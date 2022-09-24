import React, { useState, useContext } from "react"; 
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useLocation} from "react-router-dom";
import { Label, TextInput, Button, Toast} from "flowbite-react"


function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useContext(AuthContext);
    const [error, setError] = useState("")

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(e) {
      e.preventDefault();
      auth.signin(username, password)
        .then((data) => {
          if (data.error) {
            setError(data.error)
          }
          else {
            navigate(from, { replace: true });
          }
        })
    }

    return(
      <div>
        <div className="p-5 mx-20 my-4 mb-0 border-2 border-black bg-white">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label 
                htmlFor="username"
                value="Username" />
            </div>
            <TextInput 
              id="email1"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username..."
              required={true} 
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label 
                htmlFor="password1"
                value="Password" />
            </div>
            <TextInput 
              id="password1"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password..."
              value={password}
              required={true} 
            />
        </div>
        <Button type="submit">
          Login
        </Button>
      </form>
      </div>
      {error ? (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          </div>
          <div className="ml-3 text-sm font-normal">
            {error}
          </div>
          <Toast.Toggle />
        </Toast>
      ) : null}
    </div>
    );
}



export default Login;