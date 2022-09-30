import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Card } from 'flowbite-react';
import Animals from './Animals'


function IndividualDiveSite(){

    const params = useParams();
    const diveSiteID = parseInt(params.id)
    const [diveSite, setDiveSite] = useState(null)
    const [animals, setAnimals] = useState([])


    useEffect(() => {
        fetch(`/dive_sites/${diveSiteID}`)
           .then(data => data.json())
           .then(data => setDiveSite(data));
     }, []);

     
    useEffect(() => {
      fetch(`/dive_sites/${diveSiteID}/animals`)
         .then(data => data.json())
         .then(data => setAnimals(data));
      }, []);

      const animalsPerDiveSite = animals.map((animal) => (
         <Animals 
            name = {animal.name}
            species = {animal.species}
            size = {animal.size}
            description = {animal.description}
            image = {animal.image_url}
            dangerous = {animal.dangerous}
         />
      ))

     return (
        <>
           {diveSite ? (
              <div className='review-section bg-[url("https://user-images.githubusercontent.com/106715328/193144399-3c5219b0-ba6a-4567-b7e6-bdd045df1053.jpg")] min-h-screen w-full bg-cover bg-center p-20'>
                 <div className = "flex justify-center items-center">
                    <div className="w-3/4 review-card m-2">
                    <div className="pt-6 pr-6 pl-6 pb-40 min-w-lg bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-3/4">
                        <div>
                           <img src={diveSite.image_url} alt="" className="h-2/6 w-4/5 pl-20 "/>
                        </div>
                           <br/>
                           <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"> {diveSite.name} ({diveSite.country})</h5>
                           <p className="font-medium text-black mb-3 dark:text-gray-400" >Dive Site Rating: {diveSite.rating} out of 5</p>
                           <p className="font-medium text-black mb-3 dark:text-gray-400" >Dive Site Average Depth: {diveSite.avg_depth}m</p>
                           <p className="font-medium text-black mb-3 dark:text-gray-400" >Diver Skill Level: {diveSite.diver_skill_level}</p>
                           <p className="font-medium text-black mb-3 dark:text-gray-400" >Dive Site Description: {diveSite.description}</p>
                        </div>

                    </div>
                 </div>
                 <div className="grid grid-cols-4 gap-6 pt-2 pl-28 pr-32 justify-center">
                     {animalsPerDiveSite}
                </div>
              </div>
  
           ) : null};
        </>
     )
}

export default IndividualDiveSite;