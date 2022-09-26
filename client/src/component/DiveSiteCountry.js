import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "flowbite-react"

function DiveSiteCountry( {id, country, name, country_flag}){

    let navigate = useNavigate()

    function handleFlagClick(diveSiteID){
        navigate(`/divesites/${diveSiteID}`)
    }

    return(
        <div>
            <img src={country_flag} alt={country} />
            <h5>{country}</h5>
            <p>{name}</p>
            <div className="flex flex-wrap gap-2">
                <Button onClick={() => handleFlagClick(id)} gradientMonochrome="cyan">
                    View
                </Button>
            </div>
        </div>
    )

}

export default DiveSiteCountry;