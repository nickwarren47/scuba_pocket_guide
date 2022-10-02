import { Link } from "react-router-dom";
import { Card } from 'flowbite-react';

function EnvironmentalConservation(){

    return (
        <div>
            <div className="w-5/12 container mx-auto">
                <Card>
                    <div className="bg-slate-300 rounded-xl p-2">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Ocean Conservation
                    </h5>
                    <p className="mb-3 font-dark text-gray-900 dark:text-gray-700 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left"> Nothing is more important than protecting our natural resources. The oceans of the world are a gift that 
                    we eagerly squander and pollute. Our current attitude towards our oceans is deminishing the beauty and biodiversity to where we will leave nothing for our future generations. I urge you as a diver/lover of the ocean to strongly consider supporting organizations that help protect ocean wildlife and restore coral reefs. Our planet needs support and we 
                    need to think about the legacy of the ocean for future generations. Below is a list of organizations that are vetted to be the best at protecting ocean wildlife and restoring devastated coral reefs. Each photo is a link to the website for the foundation. Please visit these sites, learn about their core missons, and see how you can help support them. 
                    As an avid outdoorsman, I am determined to help preserve our natural ecosystems so that my children will have the ability to experience the awe and wonder that we all do when seeing a thriving reef. I hope my children will be able to see whales, sharks, sting rays, and many more species alive and not only just a mention in a book about extinct species. 
                    Please help me to support the organizations that are working to safeguard the environment. Thank you, Nick. 
                    </p>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Please Consider Donating to These Environmental Protection/Restoration Organizations:
                    </h5>
                    <div className="grid grid-cols-4">
                        <img src="https://user-images.githubusercontent.com/106715328/193433912-d2d65fa1-be11-4a1a-82d5-536cd8f6b3a8.jpg" alt="" className="h-7/8 w-7/8 pr-2 rounded-2xl"/>
                        <img src="https://user-images.githubusercontent.com/106715328/193433960-79ce7998-2429-4622-91a8-36c822dc76b2.jpg" alt="" className="h-7/8 w-7/8 pr-2 rounded-2xl"/>
                        <img src="https://user-images.githubusercontent.com/106715328/193434030-ed042152-4d78-4c5a-a0dc-7cc100a4c4c7.jpg" alt="" className="h-7/8 w-7/8 pr-2 rounded-2xl"/>
                        <img src="https://user-images.githubusercontent.com/106715328/193434032-a69474ed-636a-4774-b795-41d208721bec.jpg" alt="" className="h-7/8 w-7/8 pr-2 rounded-2xl"/>
                    </div>
                    <div>
                    <p className="mb-3 font-dark text-gray-900 dark:text-gray-700 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                            Each photo is a link to the organizations website. Please feel free to click on each of them to learn more about the organization. 
                        </p>
                    </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default EnvironmentalConservation;