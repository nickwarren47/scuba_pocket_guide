import { Card, Carousel } from 'flowbite-react';
import nick from "../image/nick_scuba.jpg"

function AboutApp(){

    return(
        <div id='aboutpage'>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/193150789-48bd5983-b7c6-4527-b372-29b9f831fe59.jpg)] min-h-screen w-full bg-cover bg-center p-7'>
            <div>
                    <img src="https://user-images.githubusercontent.com/106715328/193474681-1b73c208-3102-4e93-bfc0-9222d40d6de9.jpg" alt="" className="h-36 w-1/3 container mx-auto rounded-2xl m-6 border-4 border-blue-800"/>
            </div>
            <div className="h-80 w-4/12 container mx-auto">
                <Carousel slideInterval={5000}>
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161729-68e3835e-9634-43ef-97a2-9f325516ed10.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193162247-791af73a-5187-439d-a1c7-bee9cebaa60d.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161731-0a783715-7f5f-4f12-b58f-2b6c2a0bc1d1.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161272-37e71dc8-568f-4277-a7c2-95fb086fb54d.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161274-a444114a-8c95-48f2-8a82-7a32388f623a.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161275-ed996267-0dde-4770-be6a-4f17bd8a025a.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193162023-4e912a26-7cb3-4ed9-b33f-9020b6ac2663.PNG"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161288-6930ca12-e604-483e-bdc5-b9b53e6013b2.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161292-598b133e-a3b7-4286-92fe-eee13a720c6e.jpg"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/193161295-ac2b2fb4-2430-4b98-9a70-d37b534d8392.jpg"
                        alt="..."
                    />
                </Carousel>
            </div>
            
            <div className="w-4/12 container mx-auto">
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        About the App
                    </h5>
                    <p className="mb-3 font-dark text-gray-900 dark:text-gray-700 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                    Scuba Pocket Guide welcomes you!
                    The app made by a diver for divers. The idea for the app was built from the necessity to have multiple scuba diving data available to a user all at once. Unlike our competition, 
                    we offer various different data to give the user the ability to have the best diving experience possible. We hope this app will give fellow divers a better diving experience and allow
                    everyone the enjoyment of the ocean's wonders.  
                    </p>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Ocean Conservation
                    </h5>
                    <p className="mb-3 font-dark text-gray-900 dark:text-gray-700 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left"> Protecting our oceans is vital! The creator of this app has travelled all over the world getting to experience the beauty that our oceans have to offer. That being said, this app's mission (in addition to providing the best diving experiences possible) is to bring awareness
                        to environmental issues that our oceans are experiencing on a daily basis. Whether it be from ocean pollution to coral bleaching, every incident is harming our oceans and they need help. Please consider going to our "Environmental Conservation" tab to 
                        see how you can help to keep our oceans alive and beautiful for future generations. It may not seem like it but even picking up a small piece of trash on the beach or while diving can have a monumental impact in preventing microplastics from entering into the 
                        ocean. Additionally, coral reefs around the world are also facing an invasive species explosion. Fish species like Lionfish populations are exploding and are disrupting ecosystems. If you see any Lionfish, please report it to the local Fish and Wildlife department/officer. 
                        The more we can understand where these invasive animals are living, the more we can do to stop them.  
                    </p>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        About the App Developer
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

    )

}


export default AboutApp;