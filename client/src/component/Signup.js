import React, { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom";

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
        <div>
            
        </div>
    )





}

export default Signup;