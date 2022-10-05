import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
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
            species_name = {animal.species_name}
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
                    
                    <div className="w-2/5 review-card m-5">
                    <div className="pt-6 pr-6 pl-6 pb-40 min-w-lg bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-3/4">
                        <h1 className="mb-2 text-center text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">{diveSite.name} ({diveSite.country})</h1>
                          <br/>
                        <div>
                           <img src={diveSite.image_url} alt="" className="h-1/3 w-3/5 container mx-auto rounded-lg"/>
                        </div>
                           <br/>
                           <h1 className="text-2xl text-black mb-3 dark:text-gray-400" >Dive Site Rating: {diveSite.rating} out of 5</h1>
                           <h1 className="text-2xl text-black mb-3 dark:text-gray-400" >Dive Site Average Depth: {diveSite.avg_depth}m</h1>
                           <h1 className="text-2xl text-black mb-3 dark:text-gray-400" >Diver Skill Level: {diveSite.diver_skill_level}</h1>
                           <h1 className="text-xl text-black mb-3 dark:text-gray-400" >Dive Site Description: {diveSite.description}</h1>
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