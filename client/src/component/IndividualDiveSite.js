import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Card } from 'flowbite-react';


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
                 <div className="max-w-sm review-card m-4">
                    <Card imgSrc={diveSite.image_url}>
                       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {diveSite.country}
                       </h5>
                    </Card>
                 </div>
              </div>
  
           ) : null};
        </>
     )
}

export default IndividualDiveSite;