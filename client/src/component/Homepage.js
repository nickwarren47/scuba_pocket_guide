import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import dive from "../image/dive.jpg";


function Homepage(){
const { user } = useContext(AuthContext)

return(
    <div id='homepage'>
        <div className='bg-[url(https://user-images.githubusercontent.com/106715328/187081415-68806828-ff2e-4b00-9c47-28414a0c9016.jpg)] min-h-screen w-full bg-cover bg-center p-20'>
            <div className="flex items-center justify-center scale-125 p-5">
                <img src={dive} alt="logo" />
            </div>
            <h1 className='text-cyan-200 text-7xl font-bold mt-12 text-center p-6'>Welcome to Scuba Pocket Guide!</h1>
            <h2 className="text-cyan-200 text-5xl font-bold mt-5 text-center pt-0 pb-6"> Your one-stop shop for aquatic wildlife, dive sites, and so much more</h2>
            <div className="flex items-center justify-center mt-7 space-x-7">
                <TailwindcssButton>
                    <Link to="/divesites"> Let's Get Diving! </Link>
                </TailwindcssButton>
                {!user ? (
                    <>
                        <TailwindcssButton>
                            <Link to="/login"> Diver Login </Link>
                        </TailwindcssButton>
                        <TailwindcssButton>
                            <Link to="/signup"> Diver Sign Up </Link>
                        </TailwindcssButton>
                    </>
                ) : null}
            </div>
        </div>
    </div>
)
    function TailwindcssButton(props) {
        return (
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-cyan-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-3xl text-3xl px-6 py-4 text-center mr-2 mb-2">{props.children}</button>
        )
    }
}

export default Homepage;