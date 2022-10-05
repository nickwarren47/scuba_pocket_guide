// import { Link } from "react-router-dom";
import { Card } from 'flowbite-react';

function EnvironmentalConservation(){

    return (
        <div>
            <div className='bg-[url("https://user-images.githubusercontent.com/106715328/193144399-3c5219b0-ba6a-4567-b7e6-bdd045df1053.jpg")] min-h-screen w-full bg-cover bg-center p-7'>
            <div>
                    <img src="https://user-images.githubusercontent.com/106715328/193474678-16fe32c3-9bfa-402e-99d5-37b857b2a5ff.jpg" alt="" className="h-36 w-2/5 container mx-auto rounded-2xl m-4 border-4 border-blue-800"/>
            </div>
            <div className="w-5/12 container mx-auto my-16">
                <Card>
                    <div className="bg-slate-300 rounded-xl p-6">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Ocean Conservation
                    </h5>
                    <p className="mb-3 font-dark text-gray-900 dark:text-gray-700 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left"> Nothing is more important than protecting our natural resources. The oceans of the world are a gift that 
                    we eagerly squander and pollute. Our current attitude towards our oceans is deminishing the beauty and biodiversity to where we will leave nothing for our future generations. I urge you as a diver/lover of the ocean to strongly consider supporting organizations that help protect ocean wildlife and restore coral reefs. Our planet needs support and we 
                    need to think about the legacy of the ocean for future generations. Below is a list of organizations that are vetted to be the best at protecting ocean wildlife and restoring devastated coral reefs. Each photo is a link to the website for the foundation. Please visit these sites, learn about their core missons, and see how you can help support them. 
                    As an avid outdoorsman, I am determined to help preserve our natural ecosystems so that my children will have the ability to experience the awe and wonder that we all do when seeing a thriving reef. I hope my children will be able to see whales, sharks, sting rays, and many more species alive and not only just a mention in a book about extinct species. 
                    Please help me to support the organizations that are working to safeguard the environment. Thank you, Nick. 
                    </p>
                    <br/>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                        Please Consider Donating to These Environmental Protection/Restoration Organizations:
                    </h5>
                    <div className="grid grid-cols-4">
                        <img src="https://user-images.githubusercontent.com/106715328/193470849-814b9de9-bd4e-4fbd-a9e9-08ac9b66317a.jpg" alt="" className="h-5/6 w-6/7 m-2 rounded-2xl"/>
                        <img src="https://user-images.githubusercontent.com/106715328/193470850-a97867e7-6c7d-4583-a06e-2e430884b647.jpg" alt="" className="h-5/6 w-6/7 m-2 rounded-2xl"/>
                        <img src="https://user-images.githubusercontent.com/106715328/193470853-0eafee98-aa58-4f95-9f20-0906edccaeb2.jpg" alt="" className="h-5/6 w-6/7 m-2 rounded-2xl pr-3"/>
                        <img src="https://user-images.githubusercontent.com/106715328/193470854-20726fb3-3084-44c4-96b6-62291aa34a16.jpg" alt="" className="h-5/6 w-6/7 m-2 rounded-2xl"/>
                    </div>
                    {/* <div>
                        <p className="mb-3 font-dark text-gray-900 dark:text-gray-700 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                            Each photo is a link to the organizations website. Please feel free to click on each of them to learn more about the organization. 
                        </p>
                    </div> */}
                    </div>
                </Card>
            </div>
        </div>
    </div>
    )
}

export default EnvironmentalConservation;