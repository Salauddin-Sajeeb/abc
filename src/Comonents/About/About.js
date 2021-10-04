import React from 'react';
import './about.css'

const About = () => {
    return (
        <div>
            <h1 className="text-center mt-5">Meet Our Experts</h1>
            <div>
                <h2 className="text-info text-center"> THE BEST PERSONAL TRAINERS IN THE TOWN</h2>

            </div>
            <div className="container mt-5">

                <img className="img-fluid" src="https://thumbs.dreamstime.com/b/african-personal-trainer-helping-men-to-fill-membership-form-health-club-47294389.jpg" alt="" />


                <div>
                    <h1 className="text-info ">WHO ARE WE?</h1>
                    <h5>The Studio is a Small Group (up to six clients to one coach) & Personal Training Facility in Milton Keynes. We provide bespoke training, nutrition guidance and a mix of both accountability and community that strives to make fitness and health a valued and enjoyable part of your life, rather than a chore</h5>

                </div>




            </div>

        </div>
    );
};

export default About;