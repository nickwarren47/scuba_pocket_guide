import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Card } from 'flowbite-react';
import Animals from './Animals'


function IndividualDiveSite(){

    const params = useParams();
    const diveSiteID = parseInt(params.id)
    const [diveSite, setDiveSite] = useState(null)


    useEffect(() => {
        fetch(`/dive_sites/${diveSiteID}`)
           .then(data => data.json())
           .then(data => setDiveSite(data));
     }, []);

     return (
        <>
           {diveSite ? (
              <div className='review-section bg-[url("https://www.toptal.com/designers/subtlepatterns/uploads/just-waves.png")] min-h-screen'>
                 <div className = "flex justify-center items-center">
                    <div className="w-3/4 review-card m-4">
                        <Card >
                            <img src={diveSite.image_url} alt="" className="h-30 w-30 p-20"/>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {diveSite.name} ({diveSite.country})
                            </h5>
                            <p class="ml-2 text-lg font-medium text-gray-500 dark:text-gray-400">Dive Site Rating: {diveSite.rating} out of 5</p>
                            <p class="ml-2 text-lg font-medium text-gray-500 dark:text-gray-400">Dive Site Average Depth: {diveSite.avg_depth}m</p>
                            <p class="ml-2 text-lg font-medium text-gray-500 dark:text-gray-400">Diver Skill Level: {diveSite.diver_skill_level}</p>
                            <p className="mb-3 text-lg font-light text-gray-500 md:text-xl dark:text-gray-400">Dive Site Description: {diveSite.description}</p>
                        </Card>
                    </div>
                 </div>
                 <div className="max-w-sm">
                        <Animals diveSite={diveSite} />
                </div>
              </div>
  
           ) : null};
        </>
     )
}

export default IndividualDiveSite;