// import React, { useState} from "react";
// import { Card } from 'flowbite-react';

function Animals({ name, species, image, description, size }){
    // const [animalsList, setAnimalsList] = useState(diveSite.animals)
    // const animalList = diveSite.animals

    return(
        <div>
        <div className="pt-6 pr-6 pl-6 pb-40 min-w-lg bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto h-3/4">
            <div>
                <img src={image} alt="" className="h-64 w-4/5 pl-20 "/>
            </div>
            <br/>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <p className="font-medium text-black mb-3 dark:text-gray-400" >{species}</p>
            <p className="font-medium text-black mb-3 dark:text-gray-400" >Size: {size}cm</p>
            <p className="font-medium text-black mb-3 dark:text-gray-400" >{description}</p>

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