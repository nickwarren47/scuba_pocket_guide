import React, { useState } from "react"; 
import { useNavigate} from "react-router-dom";
import { Label, TextInput, Button, Toast} from "flowbite-react"

function Signup(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [avatar, setAvatar] = useState(""); 
    const [countryFrom, setCountryFrom] = useState(""); 
    const [diverCertLevel, setDiverCertLevel] = useState("");
    // const [disclaimer, setDisclaimer] = useState(false); 
    const [errors, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, 
                email,
                name,
                password,
                avatar,
                age, 
                countryFrom,
                // disclaimer,
                diverCertLevel
            }),
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then(() => navigate("/login"));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
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
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username..."
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Name" />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your Name..."
                            value={name}
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Email" />
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email..."
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password"
                                value="Password" />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password..."
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="age"
                                value="Age" />
                        </div>
                         <TextInput
                            id="age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter your age..."
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="avatar"
                                value="Avatar" />
                        </div>
                        <TextInput
                            id="avatar"
                            type="url"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                            placeholder="Upload your avatar..."
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="countryFrom"
                                value="CountryFrom" />
                        </div>
                        <TextInput
                            id="countryFrom"
                            type="text"
                            value={countryFrom}
                            onChange={(e) => setCountryFrom(e.target.value)}
                            placeholder="Enter the country you are from..."
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="diverCertLevel"
                                value="DiverCertLevel" />
                        </div>
                        <TextInput
                            id="diverCertLevel"
                            type="text"
                            value={countryFrom}
                            onChange={(e) => setDiverCertLevel(e.target.value)}
                            placeholder="Enter your diver certification level..."
                            required={true} />
                    </div>
                    {/* <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="disclaimer"
                                value="Diclaimer" />
                        </div>
                        <div class="flex items-center">
                            <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">SPG disclaimer</a>.</label>
                        </div>
                    </div> */}
                <Button type="submit">
                    {isLoading ? "Loading ..." : "Signup"}
                </Button>
                {errors ? (
                    <Toast>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                        </div>
                        <div className="ml-3 text-sm font-normal">
                            {errors}
                        </div>
                        <Toast.Toggle />
                    </Toast>
                ) : null}
                </form>
            </div>
        </div>
    )



}

export default Signup;