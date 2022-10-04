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
                country_from: countryFrom,
                disclaimer,
                diver_cert_level: diverCertLevel
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
        <div className="bg-[url('https://user-images.githubusercontent.com/106715328/192161678-2717f82a-fc84-4eaa-9691-74793a92d5c7.jpg')] min-h-screen w-full bg-cover bg-center p-8">
            <div>
                <img src="https://user-images.githubusercontent.com/106715328/193178138-286c49b7-ec3f-4425-8ced-4ae4ae23db15.jpg" alt="" className="h-42 w-2/5 container mx-auto rounded-2xl border-4 border-blue-800"/>
            </div>
            {/* <Navbar.Brand>
                <Link to="/">
                    <img
                        src={dive}
                        className="mr-3 h-6 sm:h-20 rounded-lg m-4"
                        alt="Wanderlust Logo" />
                </Link>
            </Navbar.Brand> */}
            <div className="flex justify-center items-center">
            <div className="p-5 mx-20 my-7 mb-0 border-2 border-black bg-white w-3/12 h-2/6 rounded-xl">
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
                            value={diverCertLevel}
                            onChange={(e) => setDiverCertLevel(e.target.value)}
                            placeholder="Enter your diver certification level..."
                            required={true} />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox 
                        id="disclaimer" 
                        onChange={() => setDisclaimer(true)}
                        value={disclaimer}
                        required={true}
                        />
                            <>
                                <Label>
                                    I agree to the SPG: 
                                </Label>
                                <Button onClick={toggleModal} gradientDuoTone="cyanToBlue" pill={true}>
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
                                        Dive at your own risk. Scuba Pocket Guide (SPG) is not liable for any injury, damages, or death caused by/from scuba dive sites recommendations, wildlife present at recommended websites, gear recommendations at dive sites, and/or any information presented on this site. Diver is  solely responsible for consulting with local dive shops (at the location of diving) to get more specific recommendations for dive conditions, local wildlife, gear, weather conditions, and any information pertaining to travel and scuba diving. This website/web application is meant to be a source of information. Diver/user is responsible for their own safety and agrees not to hold SPG and its affiliates liable for any injury, loss of property, loss of limb, displeasure with recommendations, death, or any unforeseen circumstances related to this website/web application. 
                                        </p>
                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        I, the user/diver, agree that I understand this agreement and that myself/my family/anyone related to me will not hold SPG liable for the previously mentioned circumstances. I also affirm that I am 18 years or older and can legally sign a contract within the United States of America. I agree to not touch, chase, deface, disturb, cause harm to, kill, or do anything to endanger local wildlife/coral reefs/aquatic environments that can cause irreversible harm and/or cause wildlife to retaliate and cause harm to myself. I agree to remove any manmade trash that is cuasing harm to the coral reef environment and to abide by local/country laws regarding the protection of the wildlife and aquatic environments. By selecting the agreement checkbox, I am greeing to these terms and conditions. 
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
        </div>
    )



}

export default Signup;