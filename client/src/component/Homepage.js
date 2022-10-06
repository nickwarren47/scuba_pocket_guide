import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import spg from "../image/spg.gif";


function Homepage(){
const { user } = useContext(AuthContext)

return(
    <div id='homepage'>
        <div className='bg-[url(https://user-images.githubusercontent.com/106715328/193144399-3c5219b0-ba6a-4567-b7e6-bdd045df1053.jpg)] min-h-screen w-full bg-cover bg-center p-7'>
            <div>
                <div className="flex items-center justify-center scale-100">
                    <img src={spg} alt="logo" />
                </div>
                <h1 className='text-blue-700 text-5xl font-bold mt-12 text-center pb-2'>Welcome to Scuba Pocket Guide!</h1>
                <h2 className="text-blue-700 text-3xl font-bold mt-5 text-center pt-0 pb-6"> Your one-stop shop for aquatic wildlife, dive sites, and so much more</h2>
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
    </div>
)
    function TailwindcssButton(props) {
        return (
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-3xl text-3xl px-6 py-4 text-center mr-2 mb-2">{props.children}</button>
        )
    }
}

export default Homepage;