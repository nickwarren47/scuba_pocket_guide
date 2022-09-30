import React, { useState, useContext } from "react"; 
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useLocation, Link} from "react-router-dom";
import { Label, TextInput, Button, Toast } from "flowbite-react";



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
      <div className="bg-[url('https://user-images.githubusercontent.com/106715328/192160566-39c11383-6372-4f95-b547-f14d3f75dd0b.jpg')] min-h-screen w-full bg-cover bg-center p-8">
        <div>
          <img src="https://user-images.githubusercontent.com/106715328/193177695-e0443280-fbb9-40cc-b5b0-b3031a9c45a6.jpg" alt="" className="h-72 w-3/5 container mx-auto rounded-2xl border-4 border-blue-800"/>
        </div>
        <div className="p-5 mx-20 my-10 mb-0 border-2 border-black bg-white">
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
        <Button type="submit" gradientDuoTone="cyanToBlue" pill={true}>
          Login
        </Button>
        <Link to="/">
          <Button gradientDuoTone="cyanToBlue" pill={true}>
              Return to Homepage
          </Button>
        </Link>
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