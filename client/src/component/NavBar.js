import React, { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react"
import { AuthContext } from "../Context/AuthContext"
import { useLocation } from 'react-router-dom';
import spg from '../image/spg.gif';

function NavBar() {
    const navigate = useNavigate();
    const [isNavBarHidden, setIsNavBarHidden] = useState(true)
    const { user, signout } = useContext(AuthContext);

    let location = useLocation();

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup") {
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
                                src={spg}
                                className="mr-3 h-6 sm:h-20"
                                alt="SPG Logo" />
                            <h1 className="text-2xl font-bold text-blue-800 pl-4">SPG</h1>
                        </Link>
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
                            <Button
                                gradientDuoTone="cyanToBlue"
                                pill={true}>
                               <Link to="/login"> Login </Link> 
                            </Button>
                        )}

                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link
                            active={location.pathname === "/divesites"}>
                            <Link to="/divesites"> Dive Sites </Link>
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
                            active={location.pathname === "/divelog"}>
                            {user ? (<Link to="/divelog"> Dive Logs </Link>) : null}
                        </Navbar.Link>

                        <Navbar.Link
                            active={location.pathname === "/diverprofiles"}>
                            {user ? (<Link to="/diverprofiles"> Diver Profiles </Link>) : null}
                        </Navbar.Link>

                    </Navbar.Collapse>
                </Navbar>) : null}
        </>
    )
}

export default NavBar;