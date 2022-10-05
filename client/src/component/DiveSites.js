import React, { useState } from 'react'
import DiveSiteCountry from './DiveSiteCountry';
import spg from '../image/spg.gif';
import { Footer } from "flowbite-react"


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
        <>
            <div className="bg-[url('https://user-images.githubusercontent.com/106715328/193144399-3c5219b0-ba6a-4567-b7e6-bdd045df1053.jpg')] min-h-screen w-full bg-cover bg-center p-7">
                <div>
                    <img src="https://user-images.githubusercontent.com/106715328/193474676-c98a71b7-c809-437f-84c1-f5d670273dcb.jpg" alt="" className="h-36 w-1/3 container mx-auto rounded-2xl m-6 border-4 border-blue-800"/>
                </div>
                {/* <div className="flex items-center justify-center scale-100 p-5">
                    <img className="rounded-lg border-4 border-blue-800" src={spg} alt="logo" />
                </div> */}
                <div className="flex items-center justify-center">
                <input
                    className= "ml-5 bg-transparent rounded-lg border-white text-white font-bold text-2xl border-8"
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search Dive Sites..."/>
                </div>
                <div className="grid grid-cols-5 gap-4 pt-6 pl-28 pr-32 justify-center">
                {diveSiteList}
                </div>
            </div>
            <Footer container={true}>
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between"> 
                    <Footer.Brand
                        src={spg}
                        alt="SPG Logo"
                        name="SPG"
                        size="lg"
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">
                        About
                        </Footer.Link>
                        <Footer.Link href="#">
                        Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright
                    href="#"
                    by="Scuba Pocket Guide™"
                    year={2022}
                    />
                </div>
            </Footer>
        </>
    )
}

export default DiveSites;