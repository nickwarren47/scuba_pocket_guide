import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import spg from "../image/spg.gif";
import { Card } from 'flowbite-react';
import nick from "../image/nick_scuba.jpg"
import diver from "../image/diver.jpg"


function Homepage(){
const { user } = useContext(AuthContext)

return(
    <div id='homepage'>
        <div className='bg-[url(https://user-images.githubusercontent.com/106715328/193144399-3c5219b0-ba6a-4567-b7e6-bdd045df1053.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
            <div>
                <div className="flex items-center justify-center scale-75">
                    <img src={spg} alt="logo" />
                </div>
                <h1 className='text-blue-700 text-5xl font-bold mt-1 text-center pb-1'>Welcome to Scuba Pocket Guide!</h1>
                <h2 className="text-blue-700 text-3xl font-bold mt-4 text-center pt-0 pb-6"> The app for aquatic wildlife, dive site info, weather updates, and so much more</h2>
                {/* <div className="flex items-center justify-center mt-7 space-x-7">
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
                </div> */}
                <div className="w-4/5 container mx-auto">
                <Card>
                    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        About the App
                    </h5>
                    {/* <img src={nick} alt="" className="float-left h-4/5 w-64"/> */}
                    <p className="text-left text-2xl">
                    <img src={diver} alt="" className="float-left h-1/5 w-2/5 m-3"/>Hello and welcome!
                    This app is made by a diver for divers. The idea for the app was built from the necessity to have multiple scuba diving data available to a user all at once. My wife and I are devoted scuba divers and we are both PADI certified. Throughout our dives around the world,
                    I was upset by the lack of apps that give divers the ability to search for dive site locations, wildlife identification, weather conditions, re-education in proper dive procedures, gear recommendations, etc. Not to mention to have all these features in one app instead of 
                    various other apps. If you want to learn more about the app's development, myself, or our devotion to environment conservation, please feel free to click this link:    
                        {/* <img src={nick} alt="" className="float-left h-4/5 w-64"/> */}
                    </p>
                    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Caribbean Dive Sites and Wildlife
                    </h5>
                    <p className="mb-3 font-dark text-gray-900 dark:text-gray-700 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left"> Protecting our oceans is vital! The creator of this app has travelled all over the world getting to experience the beauty that our oceans have to offer. That being said, this app's mission (in addition to providing the best diving experiences possible) is to bring awareness
                        to environmental issues that our oceans are experiencing on a daily basis. Whether it be from ocean pollution to coral bleaching, every incident is harming our oceans and they need help. Please consider going to our "Environmental Conservation" tab to 
                        see how you can help to keep our oceans alive and beautiful for future generations. It may not seem like it but even picking up a small piece of trash on the beach or while diving can have a monumental impact in preventing microplastics from entering into the 
                        ocean. Additionally, coral reefs around the world are also facing an invasive species explosion. Fish species like Lionfish populations are exploding and are disrupting ecosystems. If you see any Lionfish, please report it to the local Fish and Wildlife department/officer. 
                        The more we can understand where these invasive animals are living, the more we can do to stop them.  
                    </p>
                    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Diver Features
                    </h5>
                    <div>
                        <img src={nick} alt="" className="float-right h-4/5 w-64"/>
                        <p className="mb-3 font-dark text-gray-900 dark:text-gray-700 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                            Generally, I prefer to let my work speak for itself but I know I couldn't have done this on my own. I would like to give a big thank you to my parents, family, friends, and especially my wife who supported me throughout my 
                            Software Engineering journey. I started this Software Engineering journey by becoming a student at Flatiron School. There I studied JavaScript, Ruby, React, Rails, Semantic UI, Sinatra, Tailwind CSS, HTML, and CSS. 
                            I'm an avid scuba diver in my free time, I also mountain bike, rock hunt, hike, woodwork, weld, and enjoy playing with my dog. Basically, I enjoy all things outdoors and the ability to work with my hands. This project is a testament to the wonderful education I 
                            recieved from the staff at Flatiron School and the support I have received from those around me. I would also like to thank you for visiting the site! -Nick
                        </p>
                    </div>
                </Card>
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