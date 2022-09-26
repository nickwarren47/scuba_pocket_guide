import React, { useState } from 'react'
import DiveSiteCountry from './DiveSiteCountry';

function DiveSites({ diveSites, handleFlagClick }){

    const [search, setSearch] = useState("")

    const searchResults = diveSites.filter(diveSite => (
        diveSite.country.toLowerCase().includes(search.toLowerCase()) ||
        diveSite.name.toLowerCase().includes(search.toLowerCase())
    ))

    function handleSearch(e){
        setSearch(e.target.value)
    }

    const diveSiteList = searchResults.map(diveSite => (
        <DiveSiteCountry 
            name={diveSite.name}
            country={diveSite.country}
            image_url={diveSite.image_url}
            country_flag={diveSite.country_flag}
            avg_depth={diveSite.avg_depth}
            description={diveSite.description}
            diver_skill_level={diveSite.diver_skill_level}
            rating={diveSite.rating}
            id={diveSite.id}
            handleFlagClick={handleFlagClick} />

    ))
}

export default DiveSites;