import React, { useState, useContext, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"


function DiveLogForm({diveLogs}){
    const [diveNumber, setDiveNumber] = useState(1)
    const [diveSiteName, setDiveSiteName] = useState("")
    const [date, setDate] = useState(new Date())
    const [timeIn, setTimeIn] = useState("")
    const [timeOut, setTimeOut] = useState("")
    const [depthAchieved, setDepthAchieved] = useState(1)
    const [startingPsi, setStartingPsi] = useState(1)
    const [endingPsi, setEndingPsi] = useState(1)
    const [airTemp, setAirTemp] = useState(1) 
    const [surfaceTemp, setSurfaceTemp] = useState(1) 
    const [bottomTemp, setBottomTemp] = useState(1) 
    const [freshOrSaltWater, setFreshOrSaltWater] = useState(false)
    const [shoreOrBoat, setShoreOrBoat] = useState(false)
    const [trainingDive, setTrainingDive] = useState(false)
    const { user } = useContext(AuthContext);

}

export default DiveLogForm;