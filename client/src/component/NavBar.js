import React, { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react"
import { AuthContext } from "../Context/AuthContext"
import { useLocation } from 'react-router-dom';
import spgLogo from '../image/spgLogo.gif';

function NavBar() {
    const navigate = useNavigate();
    const [isNavBarHidden, setIsNavBarHidden] = useState(true)
    const { user, signout } = useContext(AuthContext);

    let location = useLocation();

    useEffect(() => {
        if (location.pathname === "/login" || location.pathname === "/signup") {
            setIsNavBarHidden(true);
        }
        else {
            setIsNavBarHidden(false);
        }
    }, [location]);

    // DON'T change this f(x) later
    function handleLogout() {
       signout().then(() => navigate("/"))
    }

    return (
        <>
            {!isNavBarHidden ?
                (<Navbar
                    fluid={true}
                    rounded={true}>
                    <Navbar.Brand>
                        <Link to="/">
                            <img
                                src={spgLogo}
                                className="mr-4 h-7 sm:h-24"
                                alt="SPG Logo"/>
                        </Link>
                        <h1 className="text-3xl font-bold text-blue-800">Scuba Pocket Guide</h1>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        {user ? (
                            <>
                                <Dropdown
                                    arrowIcon={false}
                                    inline={true}
                                    label={<Avatar alt="User settings" img={user.avatar} rounded={true} size="lg" />}>
                                    <Dropdown.Header>
                                        <span className="block text-md">
                                            {user.username}
                                        </span>
                                        <span className="block truncate text-sm font-medium">
                                            Hello, {user.name}!
                                        </span>
                                    </Dropdown.Header>
                                    <Dropdown.Item onClick={handleLogout}>
                                        Sign out
                                    </Dropdown.Item>
                                </Dropdown>
                                <Navbar.Toggle />
                            </>
                            ) : (
                            <div className="columns-2">
                                <div>
                                <Button
                                    gradientDuoTone="cyanToBlue"
                                    pill={true}>
                                <Link to="/login"> Login </Link> 
                                </Button>
                                </div>
                                <div>
                                <Button
                                    gradientDuoTone="cyanToBlue"
                                    pill={true}>
                                <Link to="/signup"> Sign Up </Link> 
                                </Button>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="mr-52">
                    <Navbar.Collapse>
                        <Navbar.Link
                            active={location.pathname === "/"}>
                            <Link to="/"> Home Page </Link>
                        </Navbar.Link>

                        <Navbar.Link
                            active={location.pathname === "/divesites"}>
                            <Link to="/divesites"> Dive Sites </Link>
                        </Navbar.Link>

                        <Navbar.Link
                            active={location.pathname === "/weather"}>
                            <Link to="/weather"> Weather </Link>
                        </Navbar.Link>

                        <Navbar.Link
                            active={location.pathname === "/hand_signals"}>
                            <Link to="/hand_signals"> Hand Signals </Link>
                        </Navbar.Link>

                        <Navbar.Link
                            active={location.pathname === "/about"}>
                            <Link to="/about"> About </Link>
                        </Navbar.Link>

                        <Navbar.Link
                            active={location.pathname === "/environment"}>
                            <Link to="/environment"> Conservation </Link>
                        </Navbar.Link>

                        <Navbar.Link
                            active={location.pathname === "/divelogform"}>
                            {user ? (<Link to="/divelogform"> Dive Log Entry </Link>) : null}
                        </Navbar.Link>

                        <Navbar.Link
                            active={location.pathname.startsWith("/diver")}>
                            {user ? (<Link to={`/diver/${user.id}`}> Diver Profile </Link>) : null}
                        </Navbar.Link>

                    </Navbar.Collapse>
                    </div>
                </Navbar>) : null}
        </>
    )
}

export default NavBar;