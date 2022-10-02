import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import DiveLogCards from './DiveLogCards';

function DiverProfile(){

    const params = useParams();
    const diverID = parseInt(params.id)
    const[diver, setDiver] = useState(null)
    const[diveLogs, setDiveLogs] = useState([])

    useEffect(() => {
        fetch(`/divers/${diverID}`)
           .then(data => data.json())
           .then(data => setDiver(data));
     }, []);
    
    useEffect(() => {
        fetch(`/divers/${diverID}/dive_logs`) 
          .then(data => data.json())
          .then(data => setDiveLogs(data))
    }, []);

    const diveLogsPerDiver = diveLogs.map((diveLog) => (
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
           <div className="w-2/5 review-card m-5">
           <div className="pt-6 pr-6 pl-6 pb-40 min-w-lg bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-3/4">
               <h1 className="mb-2 text-center text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">{diver.name} ({diver.country_from})</h1>
                 <br/>
               <div>
                  <img src={diver.avatar} alt="" className="h-1/3 w-3/5 container mx-auto rounded-lg"/>
               </div>
                  <br/>
                  <h1 className="text-2xl text-black mb-3 dark:text-gray-400" >Diver Certification Level: {diver.diver_cert_level}</h1>
                  <h1 className="text-2xl text-black mb-3 dark:text-gray-400" >Diver Age: {diver.age}m</h1>
                  <h1 className="text-2xl text-black mb-3 dark:text-gray-400" >Diver Email: {diver.email}</h1>
                  <h1 className="text-xl text-black mb-3 dark:text-gray-400" >Diver Username: {diver.username}</h1>
               </div>
           </div>
        </div>
        <div>
            {diveLogsPerDiver}
        </div>
    </div>
    )

}

export default DiverProfile;