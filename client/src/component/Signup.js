import React, { useState } from "react"; 
import { useNavigate, Link} from "react-router-dom";
import { Label, TextInput, Button, Toast, Checkbox, Modal} from "flowbite-react";

function Signup(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [avatar, setAvatar] = useState(""); 
    const [countryFrom, setCountryFrom] = useState(""); 
    const [diverCertLevel, setDiverCertLevel] = useState("");
    const [disclaimer, setDisclaimer] = useState(false); 
    const [errors, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);


    function toggleModal(){
        setModal(!modal)
        console.log(modal)
    }

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
                disclaimer,
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
        <div className="bg-[url('https://user-images.githubusercontent.com/106715328/192161678-2717f82a-fc84-4eaa-9691-74793a92d5c7.jpg')] min-h-screen w-full bg-cover bg-center p-20">
            <div className="p-5 mx-20 my-80 mb-0 border-2 border-black bg-white">
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
                    <div className="flex items-center gap-2">
                        <Checkbox 
                        id="disclaimer" 
                        onChange={(e) => setDisclaimer(e.target.value)}
                        value={disclaimer}
                        required={true}
                        />
                            <>
                                <Button onClick={toggleModal}>
                                    User Agreement
                                </Button>
                                <Modal
                                    show={modal}
                                    onClose={toggleModal}
                                >
                                    <Modal.Header>
                                    Terms of Service
                                    </Modal.Header>
                                    <Modal.Body>
                                    <div className="space-y-6">
                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                        </p>
                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                        </p>
                                    </div>
                                    </Modal.Body>
                                </Modal>
                            </>
                    </div>
                <Button type="submit" gradientDuoTone="cyanToBlue" pill={true}>
                    {isLoading ? "Loading ..." : "Signup"}
                </Button>
                <Link to="/">
                    <Button gradientDuoTone="cyanToBlue" pill={true}>
                        Return to Homepage
                    </Button>
                </Link>
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