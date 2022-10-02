import React, { useState, useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Label, TextInput, Button, Checkbox} from "flowbite-react"

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


    function handleSubmit(e){
        e.preventDefault();
        fetch("/dive_logs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                diveNumber, 
                diveSiteName,
                date,
                timeIn,
                timeOut,
                depthAchieved, 
                startingPsi,
                endingPsi,
                airTemp,
                surfaceTemp,
                bottomTemp,
                freshOrSaltWater,
                shoreOrBoat,
                trainingDive
            }),
        })
    }
    return(
    <div className="bg-[url('https://user-images.githubusercontent.com/106715328/193144399-3c5219b0-ba6a-4567-b7e6-bdd045df1053.jpg')] min-h-screen w-full bg-cover bg-center p-7">
            <div>
                <img src="https://user-images.githubusercontent.com/106715328/193474677-22ca4cdb-5716-4d49-b5ca-3393a53c2b5c.jpg" alt="" className="h-36 w-2/5 container mx-auto rounded-2xl m-4 border-4 border-blue-800"/>
            </div>
        <div className="p-10 my-16 ml-96 mr-96 mb-20 border-2 border-black bg-white">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="diveNumber"
                                value="Dive Number" />
                        </div>
                        <TextInput
                            id="base"
                            type="number"
                            sizing="md"
                            min="1"
                            max="5000"
                            value={diveNumber}
                            onChange={(e) => setDiveNumber(e.target.value)} />
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="diveSite"
                                value="Dive Site" />
                        </div>
                        <TextInput
                            id="diveSite"
                            type="text"
                            placeholder="Dive Site Name"
                            value={diveSiteName}
                            onChange={(e) => setDiveSiteName(e.target.value)}
                            required={true} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="date"
                                value="Date" />
                        </div>
                        <TextInput
                            id="date"
                            type="text"
                            placeholder="Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="timeIn"
                                value="Time In" />
                        </div>
                        <TextInput
                            id="timeIn"
                            type="text"
                            placeholder="Starting Time In Water"
                            value={timeIn}
                            onChange={(e) => setTimeIn(e.target.value)}
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="timeOut"
                                value="Time Out" />
                        </div>
                        <TextInput
                            id="timeOut"
                            type="text"
                            placeholder="Ending Time In Water"
                            required={true}
                            value={timeOut}
                            onChange={(e) => setTimeOut(e.target.value)}
                            />
                    </div>
                    <div>
                        <div className="mb-1 block">
                            <Label
                                htmlFor="maxDepth"
                                value="Max Depth" />
                        </div>
                        <TextInput
                            id="depthAchieved"
                            type="text"
                            placeholder="Max Depth"
                            required={true}
                            value={depthAchieved}
                            onChange={(e) => setDepthAchieved(e.target.value)}
                            />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="startingPsi"
                                value="Starting PSI" />
                        </div>
                        <TextInput
                            id="startingPsi"
                            type="text"
                            placeholder="Starting PSI"
                            required={true}
                            value={startingPsi}
                            onChange={(e) => setStartingPsi(e.target.value)}
                            />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="endingPsi"
                                value="Ending PSI" />
                        </div>
                        <TextInput
                            id="endingPsi"
                            type="text"
                            placeholder="Ending PSI"
                            required={true}
                            value={endingPsi}
                            onChange={(e) => setEndingPsi(e.target.value)}
                            />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="airTemp"
                                value="Air Temperature" />
                        </div>
                        <TextInput
                            id="airTemp"
                            type="text"
                            placeholder="Air Temperature"
                            required={false}
                            value={airTemp}
                            onChange={(e) => setAirTemp(e.target.value)}
                            />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="surfaceTemp"
                                value="Surface Temperature" />
                        </div>
                        <TextInput
                            id="surfaceTemp"
                            type="text"
                            placeholder="Surface Temperature"
                            required={false}
                            value={surfaceTemp}
                            onChange={(e) => setSurfaceTemp(e.target.value)}
                            />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="bottomTemp"
                                value="Bottom Temperature" />
                        </div>
                        <TextInput
                            id="bottomTemp"
                            type="text"
                            placeholder="Bottom Temperature"
                            required={false}
                            value={bottomTemp}
                            onChange={(e) => setBottomTemp(e.target.value)}
                            />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="freshOrSaltWater"
                                value="Fresh or Salt Water Dive:" />
                        </div>
                        <div className="mx-4">
                            <Checkbox 
                                id="shoreOrBoat" 
                                onChange={() => setFreshOrSaltWater(true)}
                                value={freshOrSaltWater}
                                required={false}
                            />
                                <Label className="m-2">
                                    Fresh Water
                                </Label>
                            <br/>
                            <Checkbox 
                                id="shoreOrBoat" 
                                onChange={() => setFreshOrSaltWater(false)}
                                value={freshOrSaltWater}
                                required={false}
                            />
                                <Label>
                                    Salt Water 
                                </Label>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-4">
                            <Label
                                htmlFor="shoreOrBoat"
                                value="Shore or Boat Dive:" />
                        </div>
                        <div className="mx-4">
                            <Checkbox 
                                id="shoreOrBoat" 
                                onChange={() => setShoreOrBoat(true)}
                                value={shoreOrBoat}
                                required={false}
                            />
                                <Label className="m-2">
                                    Shore Dive
                                </Label>
                            <br/>
                            <Checkbox 
                                id="shoreOrBoat" 
                                onChange={() => setShoreOrBoat(false)}
                                value={shoreOrBoat}
                                required={false}
                            />
                                <Label>
                                    Boat Dive 
                                </Label>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-4">
                            <Label
                                htmlFor="trainingDive"
                                value="Training Dive:" 
                                />
                        </div>
                  
                        <div className="mx-4">
                            <Checkbox 
                            id="trainingDive" 
                            onChange={() => setTrainingDive(true)}
                            value={trainingDive}
                            required={false}
                            />
                                <Label>
                                    Training Dive 
                                </Label>
                        </div>
                    </div>
                    <div className="m-1">
                    <Button
                        gradientDuoTone="cyanToBlue"
                        pill={true}
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                    </div>
                </form>
        </div>
    </div>
    )


}

export default DiveLogForm;