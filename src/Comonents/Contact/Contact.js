import React from 'react';
import './contact.css'

const Contact = () => {
    return (
        <div>
            <h1 className="text-center p-4 ">Contact US</h1>
            <div className="p-4 container">
                <form>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="validationDefault01">First name</label>
                            <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Enter your name" required></input>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationDefault02">Last name</label>
                            <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="last name" required></input>
                        </div>

                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="validationDefault03">City</label>
                            <input type="text" class="form-control" id="validationDefault03" placeholder="City" required></input>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationDefault04">State</label>
                            <input type="text" class="form-control" id="validationDefault04" placeholder="State" required></input>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationDefault05">Zip</label>
                            <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                            <label class="form-check-label" for="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </form>
                <div>
                    <h3 className="text-center text-info">Address</h3>
                    <h5 className="text-center">House 5, Road 11, Uttara, Dhaka</h5>
                </div>
            </div>
        </div>
    );
};

export default Contact;