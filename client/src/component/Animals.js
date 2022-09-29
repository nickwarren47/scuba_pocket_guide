// import React, { useState} from "react";
import { Card } from 'flowbite-react';

function Animals({ diveSite }){
    // const [animalsList, setAnimalsList] = useState(diveSite.animals)
    const animalList = diveSite.animals

    return(
        <div>
            {animalList.map((animal) => {
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
            })}
        </div>
    )
}


export default Animals;