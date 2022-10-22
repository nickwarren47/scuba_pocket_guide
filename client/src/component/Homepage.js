import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import spg from "../image/spg.gif";
import { Card } from 'flowbite-react';
import nick from "../image/nick_scuba.jpg"
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
                    <img src={diver} alt="" className="float-left h-1/5 w-2/5 m-3"/>Hello and welcome!
                    The goal of SPG is to become THE diving resource guide for the average diver. Have you ever had a dive trip coming up, not known a lot about dive sites in the area, and tried to get more information only to come up short? Us too. SPG was created to provide divers with more information 
                    about popular dive sites, including the different species of animals and corals native to sites.      
                    </p>
                    <p className="text-left text-2xl">
                    <img src={angelfish} alt="" className="float-right h-1/5 w-2/5 m-3"/>
                    The Caribbean sea is the one of the jewels of our oceans. The coral reefs sprinkled all throughout the Caribbean are exploding with biodiversity. Undoubtedly a must see for any avid scuba divers. The hope of this app is to eventually include other dive sites around the world 
                    but to start, it will focus on the beauty and majesty of the Carribean. With the rich biodiversity, there are many animals/corals that are completely harmless to divers; however, there are animals and corals that are present in the Caribbean that can cause serious injury or even death. 
                    For those animals/corals, our app provides warnings under each animal's photo to warn and instruct on how to stay safe around the animals. Additionally, the app provides information on each individual dive site and allows you to search based on country name or dive site name. To get started on 
                    searching for dive sites and to see the wildlife present, click this link:    
                    </p>
                    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Caribbean Dive Sites and Wildlife
                    </h5>
                    <p className="text-left text-2xl">
                    <img src={angelfish} alt="" className="float-right h-1/5 w-2/5 m-3"/>
                    The Caribbean sea is the one of the jewels of our oceans. The coral reefs sprinkled all throughout the Caribbean are exploding with biodiversity. Undoubtedly a must see for any avid scuba divers. The hope of this app is to eventually include other dive sites around the world 
                    but to start, it will focus on the beauty and majesty of the Carribean. With the rich biodiversity, there are many animals/corals that are completely harmless to divers; however, there are animals and corals that are present in the Caribbean that can cause serious injury or even death. 
                    For those animals/corals, our app provides warnings under each animal's photo to warn and instruct on how to stay safe around the animals. Additionally, the app provides information on each individual dive site and allows you to search based on country name or dive site name. To get started on 
                    searching for dive sites and to see the wildlife present, click this link:    
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
}

export default Homepage;