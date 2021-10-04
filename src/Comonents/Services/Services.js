import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        const url = "https://salauddin-sajeeb.github.io/GymData/fakeData.JSON";
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, []);

    console.log(services)
    return (
        <div>

            <div className="body-container mx-5">

                <div className="body-items m-3">
                    {
                        services.map(service => <Service

                            service={service}
                            key={service.key}



                        ></Service>)
                    }

                </div>
            </div>


        </div>
    );
};

export default Services;