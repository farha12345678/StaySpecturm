import { useEffect, useState } from "react";
import AgentCard from "./AgentCard";


const Agent = () => {
    const [agent , setAgent] = useState([]);

    useEffect(()=> {
        fetch('agents.json')
        .then(res => res.json())
        .then(data => setAgent(data))
    },[])
    return (
        <div>
            <div className="text-center my-20">
                <p><small className="font-bold text-lg text-blue-600">Meet</small></p>
                <h1 className="text-3xl font-bold">Our Agents</h1>
                <p className="mt-2">We have best team to help you find best deal</p>
                <div className="grid my-20 lg:grid-cols-4 md:grid-cols-2">
                    {
                        agent.map(data => <AgentCard key={agent.id} data={data}></AgentCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Agent;