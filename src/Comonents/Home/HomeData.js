import React from 'react';
import './homeData.css'

const HomeData = (props) => {
    const { name, image, trainer, classTime, fee } = props.service;
    return (
        <div>

            <div className="service shadow p-3 mb-5 bg-white rounded">
                <img className="img-fluid  rounded" src={image} alt="" srcset="" />
                <br />
                <div className="background">
                    <h2 className="text-info">{name}</h2>
                    <h3>Trainer: {trainer}</h3>
                    <h5>Class Time : {classTime}</h5>
                    <h6>Monthly Fee: $ {fee}</h6>

                </div>


            </div>
        </div>
    );

};

export default HomeData;