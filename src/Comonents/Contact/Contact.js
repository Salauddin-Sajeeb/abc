import React from 'react';
import './contact.css'

const Contact = () => {
    return (
        <div className="contact-body">
            <h1 className="text-center p-4 ">Contact Us</h1>
            <div className="p-4 container">
                <form className="pb-5">
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label for="validationDefault01">First name</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="First name" value="Enter your name" required></input>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="validationDefault02">Last name</label>
                            <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" value="last name" required></input>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label for="validationDefault03">City</label>
                            <input type="text" className="form-control" id="validationDefault03" placeholder="City" required></input>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationDefault04">State</label>
                            <input type="text" className="form-control" id="validationDefault04" placeholder="State" required></input>
                        </div>

                    </div>

                    <button className="btn btn-primary" type="submit">Submit form</button>
                </form>
                <div>
                    <h3 classNameName="text-center text-info">Address</h3>
                    <h5 classNameName="text-center">House 5, Road 11, Uttara, Dhaka</h5>
                </div>
            </div>
        </div>
    );
};

export default Contact;