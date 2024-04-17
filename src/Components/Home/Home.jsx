import Banner from "./Banner";
import EstateSection from "../Estates/EstateSection";
import Agent from "../AgentsSection/Agent";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    StaySpecturm || Home
                </title>
            </Helmet>
            <Banner></Banner>
            <EstateSection></EstateSection>
            <Agent></Agent>
        </div>
    );
};

export default Home;