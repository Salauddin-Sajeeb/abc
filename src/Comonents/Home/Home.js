import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Header from '../Header/Header';
import './home.css'
import HomeData from './HomeData';

const Home = () => {
    const [home, setHome] = useState([]);
    useEffect(() => {
        const url = "https://salauddin-sajeeb.github.io/GymData/fakeData.JSON";
        fetch(url)
            .then(res => res.json())
            .then(data => setHome(data))

    }, []);

    return (

        <div>

            <div className="body-container mx-5">

                <div className="body-items m-3">
                    {
                        home.slice(0, 4).map(service => <HomeData

                            service={service}
                            key={service.key}



                        ></HomeData>)
                    }

                </div>
            </div>


        </div>
    );


};

export default Home;