import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import spg from "../image/spg.gif";
import { Card, Button } from 'flowbite-react';
import diver from "../image/diver.jpg"
import angelfish from "../image/angelfish.jpg"


function Homepage(){
const { user } = useContext(AuthContext)

return(
    <div id='homepage'>
        <div className='bg-[url(https://user-images.githubusercontent.com/106715328/193144399-3c5219b0-ba6a-4567-b7e6-bdd045df1053.jpg)] min-h-screen w-full bg-cover bg-center p-1'>
            <div>
                <div className="flex items-center justify-center scale-75">
                    <img src={spg} alt="logo" />
                </div>
                <h1 className='text-blue-700 text-5xl font-bold mt-1 text-center pb-1'>Welcome to SPG!</h1>
                <h2 className="text-blue-700 text-3xl font-bold mt-4 text-center pt-0 pb-6"> Plan your next dive trip using tools created for divers by divers.</h2>
                <div className="w-4/5 container mx-auto">
                <Card>
                    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        About SPG
                    </h5>
                    <p className="text-left text-2xl">
                    <img src={angelfish} alt="" className="float-left h-1/5 w-2/5 m-3"/>
                    The goal of SPG is to become THE diving resource guide for the average diver. Have you ever had a dive trip coming up, not known a lot about dive sites in the area, and tried to get more information only to come up short? Us too. SPG was created to provide divers with more information 
                    about popular dive sites, including the different species of animals and corals native to sites. The Caribbean sea is the one of the jewels of our oceans. The coral reefs sprinkled all throughout the Caribbean are exploding with biodiversity. Undoubtedly a must see for any avid scuba divers. The hope of this app is to eventually include other dive sites around the world 
                    but to start, it will focus on the beauty and majesty of the Carribean. With the rich biodiversity, there are many animals/corals that are completely harmless to divers; however, there are animals and corals that are present in the Caribbean that can cause serious injury or even death. 
                    For those animals/corals, our app provides warnings under each animal's photo to warn and instruct on how to stay safe around the animals. Additionally, the app provides information on each individual dive site and allows you to search based on country name or dive site name. To get started on 
                    searching for dive sites and to see the wildlife present, click this link: 
                    <Link to="/divesites" className="text-2xl underline text-blue-800 hover:text-blue-400 transition duration-300 ease-in-out mb-4"> Dive Sites </Link>
                    </p>

                    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Become an SPG Diver
                    </h5>
                    <p className="text-left text-2xl">
                    <img src={diver} alt="" className="float-right h-1/5 w-2/5 m-3"/>
                    Create an account with us to gain access to features such as our virtual dive log and other interactive features coming soon that you will be notified first. 
                    Click this button to be routed to our Sign Up page to become a certified SPG member:
                    <div>
                        <Button
                            gradientDuoTone="cyanToBlue"
                            pill={true}>
                            <Link to="/signup"> Let's Dive In </Link> 
                        </Button>
                    </div>
                    </p>
                </Card>
            </div>
            </div>
        </div>
    </div>
)
}

export default Homepage;