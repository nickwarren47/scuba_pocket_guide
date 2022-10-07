import React, { useEffect, useState, useContext} from 'react';
import { useParams } from "react-router-dom"
import DiveLogCards from './DiveLogCards';
import {AuthContext} from '../Context/AuthContext'

function DiverProfile(){

    const auth = useContext(AuthContext)
    const params = useParams();
    const[diver, setDiver] = useState({})
    const[diveLogs, setDiveLogs] = useState([])
    const[search, setSearch] = useState("")


    useEffect(() => {
        if (auth.user?.id === parseInt(params.id)){
            setDiver(auth.user)
        }
        else {
            fetch(`/api/divers/${params.id}`)
            .then(data => data.json())
            .then(data => setDiver(data));
        }
      }, []);

    
    useEffect(() => {
        fetch(`/api/divers/${params.id}/dive_logs`) 
          .then(data => data.json())
          .then(data => setDiveLogs(data))
        }, []);

    const searchResults = diveLogs.filter(diveLog => (
        diveLog.dive_site_name.toLowerCase().includes(search.toLowerCase()) ||
        diveLog.dive_site_country.toLowerCase().includes(search.toLowerCase())
    ))
    
    function handleSearch(e){
        setSearch(e.target.value)
    }
    
    const diveLogsPerDiver = searchResults.map(diveLog => (
        <DiveLogCards 
            dive_number = {diveLog.dive_number}
            dive_site_name = {diveLog.dive_site_name}
            dive_site_country = {diveLog.dive_site_country}
            date = {diveLog.date}
            time_in = {diveLog.time_in}
            time_out = {diveLog.time_out}
            depth_achieved = {diveLog.depth_achieved}
            starting_psi = {diveLog.starting_psi}
            ending_psi = {diveLog.ending_psi}
            air_temp = {diveLog.air_temp}
            surface_temp = {diveLog.surface_temp}
            bottom_temp = {diveLog.bottom_temp}
            fresh_or_salt_water = {diveLog.fresh_or_salt_water}
            shore_or_boat = {diveLog.shore_or_boat}
            training_dive = {diveLog.training_dive}
        />
    ))
    return(
        <div className='review-section bg-[url("https://user-images.githubusercontent.com/106715328/193144399-3c5219b0-ba6a-4567-b7e6-bdd045df1053.jpg")] min-h-screen w-full bg-cover bg-center p-20'>
            <div className = "flex justify-center items-center">
                <div>
                <div className="w-6/12 container mx-auto my-8">
                        <div className="bg-white rounded-xl py-8">
                        <div className="w-5/6 review-card m-2 container mx-auto bg-slate-300 rounded-lg">
                        <h1 className="mb-2 text-center text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">{diver.name} ({diver.country_from})</h1>
                            <br/>
                        <div>
                            <img src={diver.avatar} alt="" className="h-1/3 w-3/5 container mx-auto rounded-lg"/>
                        </div>
                            <br/>
                            <h1 className="text-2xl text-black mb-3 dark:text-gray-400 mx-3" >Diver Certification Level: {diver.diver_cert_level}</h1>
                            <h1 className="text-2xl text-black mb-3 dark:text-gray-400 mx-3" >Diver Age: {diver.age}</h1>
                            <h1 className="text-2xl text-black mb-3 dark:text-gray-400 mx-3" >Diver Email: {diver.email}</h1>
                            <h1 className="text-2xl text-black mb-3 dark:text-gray-400 mx-3" >Diver Username: {diver.username}</h1>
                            <br/>
                        </div>
                    </div>
                </div>
            <div className="flex items-center justify-center my-3">
                <input
                    className= "ml-5 bg-transparent rounded-lg border-white text-white font-bold text-2xl border-8"
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search Dive Logs..."/>
                </div>
            <div className='grid grid-cols-3 gap-1 pt-3 justify-center'>
                {diveLogsPerDiver}
            </div>
    </div>
    </div>
    </div>
    )

}

export default DiverProfile;