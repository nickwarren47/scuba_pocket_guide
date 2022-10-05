
function DiveLogCards({dive_number, dive_site_name, dive_site_country, date, time_in, time_out, depth_achieved, starting_psi, ending_psi, air_temp, surface_temp, bottom_temp, fresh_or_salt_water, shore_or_boat, training_dive}){


    return(
        <div>
            <div className = "flex justify-center items-center">
            <div className="w-2/5 review-card m-5">
            <div className="pt-6 pr-6 pl-6 pb-40 min-w-lg bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-3/4 w-3/4">
                <h1 className="mb-2 text-center text-6xl font-semibold tracking-tight text-gray-900 dark:text-white"> Entered Dive Log </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Dive Number: 
                        <p className="font-normal"> {dive_number} </p>
                    </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Dive Site Name: 
                        <p className="font-normal"> {dive_site_name} </p>
                    </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Dive Site Country: 
                        <p className="font-normal"> {dive_site_country} </p>
                    </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Date:
                        <p className="font-normal"> {date} </p>
                    </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Time In:
                        <p className="font-normal"> {time_in} </p>
                    </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Time Out: 
                        <p className="font-normal"> {time_out} </p>
                    </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Max Depth: 
                        <p className="font-normal"> {depth_achieved}m </p>
                    </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Starting PSI: 
                        <p className="font-normal"> {starting_psi} </p>
                    </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Ending PSI: 
                        <p className="font-normal"> {ending_psi} </p>
                    </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Air Temperature: 
                        <p className="font-normal"> {air_temp}°C </p>
                    </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Surface Temperature:
                        <p className="font-normal"> {surface_temp}°C </p>
                    </h1>
                    <h1 className="text-2xl text-black mb-3 dark:text-gray-400 font-bold">Bottom Temperature: 
                        <p className="font-normal"> {bottom_temp}°C </p>
                    </h1>
                    <div>
                        {fresh_or_salt_water ?  <p className="text-2xl text-black mb-3 dark:text-gray-400">Fresh Water</p> : <p className="text-xl text-black mb-3 dark:text-gray-400">Salt Water</p>}
                    </div>
                    <div>
                        {shore_or_boat ?  <p className="text-2xl text-black mb-3 dark:text-gray-400">Shore Dive</p> : <p className="text-xl text-black mb-3 dark:text-gray-400">Boat Dive</p>}
                    </div>
                    <div>
                        {training_dive ?  <p className="text-2xl text-black mb-3 dark:text-gray-400">Training Dive ✅</p> : null}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )

}

export default DiveLogCards;