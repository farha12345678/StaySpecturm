import { useEffect, useState } from "react";

import EstateCard from "./EstateCard";


const EstateSection = () => {
const [estate , setEstate] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setEstate(data))
    },[])
    
    return (

        <div>
            <div className="text-center mt-14">
                <h1 className="font-bold text-5xl">Top Estates</h1>
                <p className="mt-4">Here is our all top estates...</p>
            </div>
             <div  className="grid gap-y-10 lg:mx-20 lg:grid-cols-3 md:grid-cols-2">
                {
                    estate.map(data => <EstateCard key={estate.id} data={data}></EstateCard> )
                }
             </div>
                        
                </div>
           
    );
};

export default EstateSection;