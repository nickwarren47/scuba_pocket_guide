import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card } from "flowbite-react"


function DiveSiteCountry( {id, country, name, country_flag}){

    let navigate = useNavigate()

    function handleFlagClick(diveSiteID){
        navigate(`/divesites/${diveSiteID}`)
    }

    return(
        <>
        <div> 
            <div className="max-w-sm">
                <Card
                    horizontal={true}
                    imgSrc={country_flag}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {country}
                    </h5>
                    <Button onClick={() => handleFlagClick(id)} className="font-normal text-gray-700 dark:text-gray-400">
                        {name}
                    </Button>
                </Card>
            </div>
        </div>
        </>
        
    )

}

export default DiveSiteCountry;