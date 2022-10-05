// import React, { useState} from "react";
// import { Card } from 'flowbite-react';

function Animals({ name, species_name, image, description, dangerous, size }){
    // const [animalsList, setAnimalsList] = useState(diveSite.animals)
    // const animalList = diveSite.animals

    return(
        <div>
        <div className="pt-6 pr-6 pl-6 pb-40 min-w-lg bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-3/4">
            <div>
                <img src={image} alt="" className="h-72 w-11/12 pl-6 rounded-lg"/>
            </div>
            {dangerous ? (
                <div> 
                    <h2 className="text-red-800 font-bold text-xl text-center">⚠️ Use Caution Around This Animal ⚠️ </h2>
                </div>
            ):(
                null
            )
            }
            <br/>
            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <p className="text-xl text-black mb-3 dark:text-gray-400" >{species_name}</p>
            <p className="font-medium text-black mb-3 dark:text-gray-400" >Size: {size}cm</p>
            <p className="font-medium text-black mb-3 dark:text-gray-400" >Description: {description}</p>

        </div>

            {/* {animalList.map((animal) => {
                return (
                    <div>
                        <Card
                            // horizontal={true}
                            imgSrc={animal.image_url}
                            >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {animal.name}
                            </h5>
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Animal Size: {animal.size} cm
                            </h5>
                            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                {animal.description}
                            </h5>
                        </Card>
                    </div>
                )
            })} */}
        </div>
    )
}


export default Animals;