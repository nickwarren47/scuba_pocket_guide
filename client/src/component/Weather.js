import React, { useState } from 'react'
import axios from 'axios'

function Weather(){


    const [data,setData] = useState({})
    const [location, setLocation] = useState('')


    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=38e1db2c7a3672bdedf4257df2b4b2af`
   

    const searchWeatherLocation = (event) => {
        if (event.key === 'Enter'){
            axios.get(weatherUrl).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
    }


    return(
        <>
            <div className="bg-[url('https://user-images.githubusercontent.com/106715328/193144399-3c5219b0-ba6a-4567-b7e6-bdd045df1053.jpg')] min-h-screen w-full bg-cover bg-center p-7">
                <div>
                    <img src="https://user-images.githubusercontent.com/106715328/193727310-d2de292e-592e-4187-8c65-d2f08896740a.jpg" alt="" className="h-42 w-2/4 container mx-auto rounded-2xl m-6 border-4 border-blue-800"/>
                </div>
                <div className="flex items-center justify-center">
                    <input 
                        value={location}
                        className=" bg-transparent rounded-lg border-white text-white font-bold text-2xl border-8 mb-20"
                        onChange={event => setLocation(event.target.value)}
                        onKeyPress={searchWeatherLocation}  
                        placeholder="Enter City Name Here..."
                        type="text"/>
                </div>
                {/* <div className='flex items-center justify-center my-64'> */}
                <div className='flex items-center justify-center my-36'>
                        <div className="top">
                            <div className="temp">
                                <h1 className="text-6xl text-white font-bold">Current Weather In:</h1>
                            </div>
                            <br/>
                            <div className="location text-center">
                                <p className="text-4xl text-white font-bold">{data.name}</p>
                            </div>
                            <div className="temp text-center">
                                {data.main ? <h1 className="text-8xl text-white font-bold">{data.main.temp.toFixed()}°F</h1> : null}
                            </div>
                            <div className="description text-center">
                                {data.weather ?  <p className="text-3xl text-white font-bold">{data.weather[0].description}</p> : null}
                            </div>
                            <br/>
                            <div className="flex items-center justify-center pl-11">
                                <div className="feels text-center">
                                    {data.main ? <p className="text-3xl text-white font-bold pr-9">{data.main.feels_like.toFixed()}°F</p> : null}
                                    <p className="text-3xl text-white font-bold pr-9"> Feels Like</p>
                                </div> 
                                <div className="humidity text-center">
                                    {data.main ? <p className="text-3xl text-white font-bold pr-9">{data.main.humidity}%</p> : null}
                                    <p className="text-3xl text-white font-bold pr-9"> Humidity</p>
                                </div>
                                <div className="wind text-3xl text-white font-bold text-center">
                                    {data.wind ? <p className="text-3xl text-white font-bold pr-9">{data.wind.speed} MPH</p> : null}    
                                    <p className="text-3xl text-white font-bold pr-9"> Wind Speed</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-tr from-gray-900 to-gray-900 object-cover absolute mix-blend-overlay rounded-3xl w-3/5 h-2/5">
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Weather;