import React, { useState } from 'react'
import DiveSiteCountry from './DiveSiteCountry';
import dive from '../image/dive.jpg';

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

    return(
        <div className="bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/just-waves.png')]">
            <div className="flex items-center justify-center scale-100 p-5">
                <img className="rounded-lg border-4 border-black" src={dive} alt="logo" />
            </div>
            <div className="flex items-center justify-center">
            <input
                className= "ml-5"
                onChange={handleSearch}
                type="text"
                placeholder="Search Destinations"/>
            </div>
            <div className="grid grid-cols-5 gap-4 pt-6 pl-28 pr-32 justify-center">
            {diveSiteList}
            </div>
     </div>
    )
}

export default DiveSites;